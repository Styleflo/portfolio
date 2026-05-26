"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 min-h-[90vh] flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-black tracking-tighter uppercase mb-12 border-b-4 border-foreground inline-block">
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black uppercase mb-6 tracking-tight">{t("contact.chat")}</h3>
            <p className="text-sm font-bold opacity-60 leading-relaxed mb-12 italic border-l border-white/20 pl-6">
              {t("contact.chat_desc")}
            </p>
            
            <div className="space-y-8">
              <div className="group">
                <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest block mb-2">{t("contact.email")}</span>
                <a href="mailto:Florian.touraine@cegetel.net" className="text-lg font-black group-hover:underline cursor-pointer">Florian.touraine@cegetel.net</a>
              </div>
              <div className="group">
                <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest block mb-2">LinkedIn</span>
                <a href="https://linkedin.com/in/florian-touraine" target="_blank" rel="noopener noreferrer" className="text-lg font-black group-hover:underline cursor-pointer">linkedin.com/in/florian-touraine</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8 q-box"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-40">
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground outline-none py-2 text-sm font-bold transition-colors"
                placeholder="ID_00"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-40">
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground outline-none py-2 text-sm font-bold transition-colors"
                placeholder="PROT://ADDR"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest mb-4 opacity-40">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground outline-none py-2 text-sm font-bold transition-colors resize-none"
                placeholder="LOG_INPUT..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-quantum w-full"
            >
              {t("contact.send")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
