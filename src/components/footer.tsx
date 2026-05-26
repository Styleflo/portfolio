"use client"

import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-foreground/10 bg-background py-12 mt-auto transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-30">
            <p className="text-[8px] font-black tracking-[0.5em] uppercase text-foreground">
              © {new Date().getFullYear()} FLORIAN_TOURAINE // {t("footer.rights")}
            </p>
          </div>
          
          <div className="flex space-x-12">
            <FooterLink href="https://github.com/styleflo" label="GITHUB" />
            <FooterLink href="https://linkedin.com/in/florian-touraine" label="LINKEDIN" />
            <FooterLink href="mailto:Florian.touraine@cegetel.net" label="MAIL" />
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[10px] font-black tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
    >
      [{label}]
    </a>
  )
}
