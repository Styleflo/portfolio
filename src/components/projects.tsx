"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useLanguage } from "./language-provider"

interface Repo {
  id: number
  name: string
  description: string
  url: string
  homepage: string
  stars: number
  language: string
  topics: string[]
}

export function Projects() {
  const [repos, setRepos] = React.useState<Repo[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const { language, t } = useLanguage()

  React.useEffect(() => {
    async function fetchRepos() {
      setLoading(true)
      try {
        const response = await fetch(`/api/github?lang=${language}`)
        if (!response.ok) throw new Error("Failed to fetch")
        const data = await response.json()
        setRepos(data)
        setError(false)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [language]) // Refetch when language changes

  return (
    <section className="py-20 px-4 min-h-[90vh] flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl font-black tracking-tighter uppercase mb-12 border-b-4 border-foreground inline-block">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <ProjectSkeleton key={i} />)
          ) : error ? (
            <div className="col-span-full border border-foreground/20 p-12 text-center uppercase font-bold">
              {t("projects.error")}
            </div>
          ) : repos.length === 0 ? (
            <div className="col-span-full border border-foreground/20 p-12 text-center uppercase font-bold opacity-40">
              NO PROJECTS FOUND WITH TOPIC: "PORTFOLIO"
            </div>
          ) : (
            repos.map((repo, index) => (
              <ProjectCard key={repo.id} repo={repo} index={index} t={t} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ repo, index, t }: { repo: Repo; index: number; t: (key: string) => string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="q-box q-box-invert flex flex-col cursor-pointer group"
      onClick={() => window.open(repo.url, '_blank')}
    >
      <div className="flex justify-between items-start mb-8">
        <span className="text-[10px] font-bold tracking-widest opacity-40 group-hover:opacity-100 uppercase">
          {repo.language || "N/A"}
        </span>
        <div className="flex items-center gap-1 text-[10px] font-bold">
           <Star className="h-3 w-3 group-hover:fill-current" />
           {repo.stars}
        </div>
      </div>

      <h3 className="text-lg font-black uppercase tracking-tight mb-4">
        {repo.name}
      </h3>
      
      <p className="text-xs font-bold leading-relaxed mb-8 opacity-60 group-hover:opacity-100 line-clamp-4">
        {repo.description || t("projects.no_desc")}
      </p>

      <div className="mt-auto pt-4 flex justify-between items-center text-[10px] font-black tracking-[0.2em] uppercase">
        <span>FETCH_DETAILS</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  )
}

function ProjectSkeleton() {
  return (
    <div className="q-box h-[250px] animate-pulse">
      <div className="w-12 h-2 bg-foreground/10 mb-8" />
      <div className="w-3/4 h-4 bg-foreground/10 mb-4" />
      <div className="w-full h-2 bg-foreground/10 mb-2" />
      <div className="w-5/6 h-2 bg-foreground/10" />
    </div>
  )
}
