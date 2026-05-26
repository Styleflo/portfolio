"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export function About() {
  const { t } = useLanguage()

  const bentoItems = [
    {
      title: t("about.passions.title"),
      description: t("about.passions.desc"),
      label: "DATA_01",
    },
    {
      title: t("about.gaming.title"),
      description: t("about.gaming.desc"),
      label: "DATA_02",
    },
    {
      title: t("about.tech.title"),
      description: t("about.tech.desc"),
      label: "DATA_03",
    },
    {
      title: t("about.os.title"),
      description: t("about.os.desc"),
      label: "DATA_04",
    },
    {
      title: t("about.life.title"),
      description: t("about.life.desc"),
      label: "DATA_05",
    },
  ]

  return (
    <section className="py-20 px-4 min-h-[90vh] flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-black tracking-tighter uppercase mb-12 border-b-4 border-foreground inline-block">
          {t("about.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="q-box q-box-invert group"
            >
              <span className="text-[10px] font-bold tracking-widest opacity-40 group-hover:opacity-100 mb-6 block uppercase">
                {item.label}
              </span>
              <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h3>
              <p className="text-sm font-bold opacity-60 group-hover:opacity-100 leading-relaxed italic">{item.description}</p>
            </motion.div>
          ))}
          <div className="q-box flex items-center justify-center border-dashed opacity-20 hover:opacity-100 transition-opacity">
             <div className="w-16 h-16 border border-foreground flex items-center justify-center animate-spin-slow">
                <span className="text-xs font-bold">|ψ⟩</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
