"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 min-h-[90vh] flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-black tracking-tighter uppercase mb-12 border-b-4 border-foreground inline-block">
            {t("contact.title")}
          </h2>

          <h3 className="text-xl font-black uppercase mb-6 tracking-tight">{t("contact.chat")}</h3>
          <p className="text-sm font-bold opacity-60 leading-relaxed mb-12 italic max-w-md mx-auto">
            {t("contact.chat_desc")}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="q-box p-8 flex flex-col items-center justify-center space-y-4"
            >
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest block">{t("contact.email")}</span>
              <a href="mailto:Florian.touraine@cegetel.net" className="text-lg font-black hover:underline cursor-pointer break-all">
                Florian.touraine@cegetel.net
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="q-box p-8 flex flex-col items-center justify-center space-y-4"
            >
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest block">LinkedIn</span>
              <a href="https://linkedin.com/in/florian-touraine" target="_blank" rel="noopener noreferrer" className="text-lg font-black hover:underline cursor-pointer">
                in/florian-touraine
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
