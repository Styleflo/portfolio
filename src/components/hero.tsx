"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Typewriter } from "./typewriter"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-4 relative">
      {/* Qbit visual background elements (wireframes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-foreground rounded-full flex items-center justify-center animate-spin-slow">
          <div className="w-px h-full bg-foreground rotate-45" />
          <div className="w-px h-full bg-foreground -rotate-45" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 border border-foreground rounded-full flex items-center justify-center animate-reverse-spin">
          <div className="w-full h-px bg-foreground" />
        </div>
      </div>

      <div className="max-w-4xl w-full z-10 font-mono text-center md:text-left">
        <div className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Qbit Symbol */}
          <div className="w-24 h-24 border border-foreground flex items-center justify-center shrink-0 relative">
             <div className="absolute inset-2 border border-foreground/20" />
             <span className="text-xl font-bold">|ψ⟩</span>
          </div>

          <div>
            <div className="text-xs font-bold mb-4 flex items-center gap-2 opacity-40">
              <span className="w-2 h-2 bg-foreground animate-pulse" />
              SESSION_INIT // ID:FLORIAN_TOURAINE
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
              <Typewriter id="hero_greeting" text={t("hero.greeting")} delay={0.2} speed={0.03} />
            </h1>

            <Typewriter 
              id="hero_role"
              text={t("hero.role")} 
              delay={1.5} 
              speed={0.02} 
              className="text-lg md:text-xl font-bold text-foreground mb-8 block tracking-tight border-b border-foreground/20 pb-2 w-fit mx-auto md:mx-0" 
            />
          </div>
        </div>

        <div className="max-w-2xl mb-12">
          <Typewriter 
            id="hero_desc"
            text={t("hero.description")} 
            delay={2.5} 
            speed={0.01} 
            className="text-sm md:text-base text-muted-foreground leading-relaxed" 
            as="p"
          />
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href={t("hero.cv_file")}
            download
            className="btn-quantum"
          >
            {t("hero.cv")}
          </motion.a>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.8 }}
             className="flex gap-4 items-center text-xs font-bold opacity-40"
          >
            <a href="https://github.com/styleflo" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-foreground transition-all">[ GITHUB ]</a>
            <a href="https://linkedin.com/in/florian-touraine" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-foreground transition-all">[ LINKEDIN ]</a>
            <a href="mailto:Florian.touraine@cegetel.net" className="hover:opacity-100 hover:text-foreground transition-all">[ EMAIL ]</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
