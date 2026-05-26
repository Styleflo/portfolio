import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Développeur Fullstack",
  description: "Découvrez mon portfolio dynamique avec mes projets GitHub, mon parcours et mes compétences.",
  openGraph: {
    title: "Portfolio | Développeur Fullstack",
    description: "Découvrez mon portfolio dynamique avec mes projets GitHub, mon parcours et mes compétences.",
    url: "https://portfolio.example.com",
    siteName: "Mon Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Développeur Fullstack",
    description: "Découvrez mon portfolio dynamique avec mes projets GitHub, mon parcours et mes compétences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <div className="flex-1 pt-16">
              {children}
            </div>
            <Footer />
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
