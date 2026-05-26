"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.ai"),
      skills: ["Python", "PyTorch", "Deep Learning", "Generative AI", "NLP"],
    },
    {
      title: t("skills.cyber"),
      skills: ["Networking", "System Security", "Information Theory", "Cryptography"],
    },
    {
      title: t("skills.quantum"),
      skills: ["Qiskit", "PennyLane", "QAOA", "Quantum Algorithms"],
    },
    {
      title: t("skills.eng"),
      skills: ["Java", "C", "SQL", "Git", "React", "Bash"],
    },
  ]

  return (
    <section className="py-20 px-4 min-h-[90vh] flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-black tracking-tighter uppercase mb-12 border-b-4 border-foreground inline-block">
          {t("skills.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="q-box group"
            >
              <h3 className="text-lg font-black uppercase mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-foreground" />
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    <span className="text-[8px] opacity-20 group-hover:opacity-100 transition-opacity">0x{sIdx}</span>
                    <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
