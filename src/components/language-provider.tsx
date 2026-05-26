"use client"

import * as React from "react"

export type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    "nav.home": "Noyau",
    "nav.experience": "Séquence",
    "nav.skills": "Capacités",
    "nav.projects": "Projets",
    "nav.about": "À Propos",
    "nav.contact": "Contact",
    "hero.greeting": "Bonjour, je suis FLORIAN",
    "hero.role": "Étudiant Ingénieur en IA & Cybersécurité",
    "hero.description": "Étudiant en double diplôme au Canada, spécialisé en Deep Learning, Machine Learning et Cybersécurité. J'étends actuellement mon expertise au calcul quantique et à l'optimisation algorithmique avancée.",
    "hero.cv": "Récupérer CV.pdf",
    "hero.cv_file": "/cv_fr.pdf",
    "exp.title": "Séquence Temporelle",
    "exp.1.title": "Hackathon Gen-AI (Nokia) - 2ème Place",
    "exp.1.company": "Nokia / Paris",
    "exp.1.desc": "Recherche sur la prédiction CSI via l'IA générative pour les télécoms. Présentation aux experts Cisco et publication d'un article technique.",
    "exp.2.title": "Stagiaire IT - Gestion de Réseaux",
    "exp.2.company": "OnePoint / Paris",
    "exp.2.desc": "Conception et déploiement d'outils de monitoring Wi-Fi et filaire via Python. Maintenance des infrastructures critiques.",
    "exp.3.title": "Projet de Recherche (TIPE)",
    "exp.3.company": "Lycée Fénelon / Paris",
    "exp.3.desc": "Étude théorique sur l'optimisation du routage dans les réseaux mobiles. Implémentation d'un algorithme de résolution de flot en Python.",
    "edu.title": "Parcours Académique",
    "edu.1.title": "Master en Informatique (IA)",
    "edu.1.company": "UQAC, Canada",
    "edu.1.desc": "Spécialisation en Intelligence Artificielle (Deep Learning) et parcours spécifique en Algorithmes Quantiques.",
    "edu.2.title": "Diplôme d'Ingénieur (Cybersécurité)",
    "edu.2.company": "Télécom Nancy, France",
    "edu.2.desc": "Expertise en réseaux, sécurité des systèmes et théorie de l'information.",
    "edu.3.title": "CPGE MP (Maths-Physique)",
    "edu.3.company": "Lycée Fénelon, Paris",
    "edu.3.desc": "Préparation intensive aux concours des Grandes Écoles (Mines-Centrale).",
    "skills.title": "Matrice de Capacités",
    "skills.ai": "Intelligence Artificielle",
    "skills.cyber": "Cybersécurité",
    "skills.quantum": "Informatique Quantique",
    "skills.eng": "Ingénierie & Dev",
    "projects.title": "Dépôts de Données",
    "projects.desc": "Synchronisation temps réel avec les dépôts GitHub.",
    "projects.error": "Erreur de synchronisation API.",
    "projects.no_desc": "Aucune métadonnée disponible.",
    "about.title": "Spécifications Personnelles",
    "about.passions.title": "Engagement Associatif",
    "about.passions.desc": "Président du club voyage et VP BDE. Gestion de projets et logistique pour plus de 50 personnes.",
    "about.gaming.title": "Discipline & Sport",
    "about.gaming.desc": "Pratique intensive du Judo (ceinture marron). Persévérance et respect des règles.",
    "about.tech.title": "Curiosité Culturelle",
    "about.tech.desc": "Passionné par la photographie, la cuisine et le cinéma. Exploration de nouveaux horizons.",
    "about.os.title": "Valeurs & Scoutisme",
    "about.os.desc": "Chef de patrouille scout. Apprentissage de l'autonomie, du management d'équipe et des responsabilités.",
    "about.life.title": "Esprit d'Équipe",
    "about.life.desc": "Capacité à collaborer et à fédérer autour de projets communs, acquise à travers mes diverses expériences sociales.",
    "contact.title": "Initialiser Contact",
    "contact.subtitle": "Prêt pour une nouvelle collaboration ?",
    "contact.chat": "Établir une session",
    "contact.chat_desc": "Canaux ouverts pour nouvelles opportunités ou échange technique.",
    "contact.name": "Identifiant",
    "contact.email": "Protocole Email",
    "contact.message": "Message / Logs",
    "contact.send": "Transmettre",
    "footer.rights": "Tous protocoles réservés.",
  },
  en: {
    "nav.home": "Core",
    "nav.experience": "Sequence",
    "nav.skills": "Capacities",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I am FLORIAN",
    "hero.role": "Engineering Student in AI & Cybersecurity",
    "hero.description": "Dual degree student in Canada, specialized in Deep Learning, Machine Learning, and Cybersecurity. Currently expanding expertise into Quantum Computing and advanced algorithmic optimization.",
    "hero.cv": "Fetch CV.pdf",
    "hero.cv_file": "/cv_en.pdf",
    "exp.title": "Time Sequence",
    "exp.1.title": "Gen-AI Hackathon (Nokia) - 2nd Place",
    "exp.1.company": "Nokia / Paris",
    "exp.1.desc": "Research on CSI prediction using generative AI for telecom applications. Results presented to Cisco experts.",
    "exp.2.title": "IT Intern - Network Management",
    "exp.2.company": "OnePoint / Paris",
    "exp.2.desc": "Designed and deployed network monitoring tools using Python. Managed critical network infrastructure maintenance.",
    "exp.3.title": "Research Project (TIPE)",
    "exp.3.company": "Lycée Fénelon / Paris",
    "exp.3.desc": "Theoretical study on mobile network routing optimization. Implemented a flow resolution algorithm in Python.",
    "edu.title": "Academic Path",
    "edu.1.title": "Master's in Computer Science (AI)",
    "edu.1.company": "UQAC, Canada",
    "edu.1.desc": "Specialization in Artificial Intelligence (Deep Learning) and specific track in Quantum Algorithms.",
    "edu.2.title": "Engineering Degree (Cybersecurity)",
    "edu.2.company": "Télécom Nancy, France",
    "edu.2.desc": "Expertise in networking, system security, and information theory.",
    "edu.3.title": "CPGE MP (Maths-Physics)",
    "edu.3.company": "Lycée Fénelon, Paris",
    "edu.3.desc": "Intensive preparation for competitive entrance exams to French 'Grandes Écoles'.",
    "skills.title": "Capacities Matrix",
    "skills.ai": "Artificial Intelligence",
    "skills.cyber": "Cybersecurity",
    "skills.quantum": "Quantum Computing",
    "skills.eng": "Engineering & Dev",
    "projects.title": "Data Repositories",
    "projects.desc": "Real-time synchronization with GitHub repositories.",
    "projects.error": "API synchronization error.",
    "projects.no_desc": "No metadata available.",
    "about.title": "Personal Specifications",
    "about.passions.title": "Community Engagement",
    "about.passions.desc": "Travel Club President & Student Union VP. Managed logistics and budgets for 50+ people.",
    "about.gaming.title": "Discipline & Sports",
    "about.gaming.desc": "Judo practitioner (brown belt). Focus on perseverance, respect, and physical discipline.",
    "about.tech.title": "Cultural Curiosity",
    "about.tech.desc": "Enthusiast for photography, cooking, and cinema. Always exploring new horizons.",
    "about.os.title": "Values & Scouting",
    "about.os.desc": "Patrol leader. Learned autonomy, team management, and responsibility from a young age.",
    "about.life.title": "Team Spirit",
    "about.life.desc": "Ability to collaborate and unite people around shared goals, built through diverse social experiences.",
    "contact.title": "Initialize Contact",
    "contact.subtitle": "Ready for a new collaboration?",
    "contact.chat": "Establish Session",
    "contact.chat_desc": "Channels open for new opportunities or technical exchange.",
    "contact.name": "Identifier",
    "contact.email": "Email Protocol",
    "contact.message": "Message / Logs",
    "contact.send": "Transmit",
    "footer.rights": "All protocols reserved.",
  },
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>("en")

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["fr"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
