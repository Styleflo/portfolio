"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      date: "03/2026",
      title: t("exp.1.title"),
      company: t("exp.1.company"),
      description: t("exp.1.desc"),
    },
    {
      date: "06/2025 - 08/2025",
      title: t("exp.2.title"),
      company: t("exp.2.company"),
      description: t("exp.2.desc"),
    },
    {
      date: "2022 - 2023",
      title: t("exp.3.title"),
      company: t("exp.3.company"),
      description: t("exp.3.desc"),
    },
  ]

  const education = [
    {
      date: "2024 - 2026",
      title: t("edu.1.title"),
      company: t("edu.1.company"),
      description: t("edu.1.desc"),
    },
    {
      date: "2023 - 2026",
      title: t("edu.2.title"),
      company: t("edu.2.company"),
      description: t("edu.2.desc"),
    },
    {
      date: "2021 - 2023",
      title: t("edu.3.title"),
      company: t("edu.3.company"),
      description: t("edu.3.desc"),
    },
  ]

  return (
    <section className="py-20 px-4 min-h-[90vh] flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Experiences Section */}
        <h2 className="text-2xl font-black tracking-tighter uppercase mb-12 border-b-4 border-foreground inline-block">
          {t("exp.title")}
        </h2>

        <div className="space-y-12 border-l border-foreground/20 pl-8 ml-4 mb-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={`exp-${index}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative q-box"
            >
              <div className="absolute -left-[41px] top-8 w-6 h-6 bg-background border border-foreground/30 flex items-center justify-center">
                 <div className="w-2 h-2 bg-foreground" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <span className="text-[10px] font-bold text-muted-foreground whitespace-nowrap tracking-widest uppercase">
                  {exp.date}
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  {exp.title}
                </h3>
              </div>
              
              <div className="text-sm font-bold uppercase tracking-widest text-foreground/60 mb-4">
                {exp.company}
              </div>
              
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed italic">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <h2 className="text-2xl font-black tracking-tighter uppercase mb-12 border-b-4 border-foreground inline-block">
          {t("edu.title")}
        </h2>

        <div className="space-y-12 border-l border-foreground/20 pl-8 ml-4">
          {education.map((edu, index) => (
            <motion.div
              key={`edu-${index}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative q-box"
            >
              <div className="absolute -left-[41px] top-8 w-6 h-6 bg-background border border-foreground/30 flex items-center justify-center">
                 <div className="w-2 h-2 bg-foreground" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <span className="text-[10px] font-bold text-muted-foreground whitespace-nowrap tracking-widest uppercase">
                  {edu.date}
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  {edu.title}
                </h3>
              </div>
              
              <div className="text-sm font-bold uppercase tracking-widest text-foreground/60 mb-4">
                {edu.company}
              </div>
              
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed italic">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
