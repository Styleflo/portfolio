# Modern Developer Portfolio

A sleek, professional, and fully responsive portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project features smooth animations, dark/light mode support, and multi-language capabilities.

## Features

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Theme**: Dark & Light mode support via `next-themes`
- **Internationalization**: Custom Multi-language support (English/French)
- **Components**:
  - Typewriter effect for hero section
  - Page transitions for smooth navigation
  - Responsive Navbar & Footer
  - Project showcase with hover effects
  - Experience timeline
  - Skill categorization

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript, Next.js 16
- **UI/UX**: Framer Motion, Tailwind CSS
- **Icons**: Lucide, React Icons
- **Fonts**: Geist (Optimized via `next/font`)

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
src/
├── app/            # Next.js App Router (Pages & API)
├── components/     # Reusable UI components
│   ├── ui/         # Base UI elements
│   └── ...         # Feature-specific components (Hero, About, etc.)
└── public/         # Static assets (CVs, SVGs)
```
