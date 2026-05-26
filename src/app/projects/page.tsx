import { Projects } from "@/components/projects";
import { PageTransition } from "@/components/page-transition";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Projects />
    </PageTransition>
  );
}
