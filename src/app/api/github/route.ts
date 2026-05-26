import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") || "fr";
  const username = process.env.GITHUB_USERNAME || "vercel";
  const token = process.env.GITHUB_ACCESS_TOKEN;

  // Use HeadersInit type-compatible structure
  const headers: Record<string, string> = {};
  if (token) {
    headers["Authorization"] = `token ${token}`;
  }

  try {
    // 1. Fetch repositories
    const repoResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!repoResponse.ok) {
      throw new Error("Failed to fetch from GitHub");
    }

    const allRepos = await repoResponse.json();

    // 2. Filter repositories with the 'portfolio' topic
    const filteredRepos = allRepos.filter((repo: any) => 
      repo.topics && repo.topics.includes("portfolio")
    );

    // 3. For each repo, fetch the appropriate README
    const projects = await Promise.all(
      filteredRepos.map(async (repo: any) => {
        const readmeFilename = lang === "en" ? "README.en.md" : "README.md";
        let readmeContent = "";
        
        try {
          // Attempt to fetch specific README
          const readmeResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/contents/${readmeFilename}`,
            { headers, next: { revalidate: 3600 } }
          );

          if (readmeResponse.ok) {
            const readmeData = await readmeResponse.json();
            readmeContent = Buffer.from(readmeData.content, "base64").toString("utf-8");
          } else if (lang === "en") {
            // Fallback to README.md
            const fallbackResponse = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/contents/README.md`,
              { headers, next: { revalidate: 3600 } }
            );
            if (fallbackResponse.ok) {
              const fallbackData = await fallbackResponse.json();
              readmeContent = Buffer.from(fallbackData.content, "base64").toString("utf-8");
            }
          }
        } catch (err) {
          console.error(`Error fetching README for ${repo.name}:`, err);
        }

        // 4. Parse README
        let title = repo.name;
        let description = repo.description || "";

        if (readmeContent) {
          const h1Match = readmeContent.match(/^#\s+(.+)$/m);
          if (h1Match) title = h1Match[1].trim();

          // Extract first H3 (###) for description
          const h3Match = readmeContent.match(/^###\s+(.+)$/m);
          if (h3Match) {
            description = h3Match[1].trim();
          } else {
            // Fallback: extract first non-title paragraph if no H3 found
            const lines = readmeContent.split("\n");
            let firstParagraph = "";
            let foundTitle = false;
            
            for (const line of lines) {
              const trimmedLine = line.trim();
              if (!foundTitle && trimmedLine.startsWith("#")) {
                foundTitle = true;
                continue;
              }
              if (trimmedLine && !trimmedLine.startsWith("#") && !trimmedLine.startsWith("![")) {
                firstParagraph = trimmedLine;
                break;
              }
            }
            if (firstParagraph) description = firstParagraph;
          }
        }

        return {
          id: repo.id,
          name: title,
          repo_name: repo.name,
          description: description,
          url: repo.html_url,
          homepage: repo.homepage,
          stars: repo.stargazers_count,
          language: repo.language,
          topics: repo.topics || [],
        };
      })
    );

    return NextResponse.json(projects);
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
