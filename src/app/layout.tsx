import type { Metadata, Viewport } from "next";
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
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1115" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Florian Touraine | AI & Cybersecurity Student",
    template: "%s | Florian Touraine",
  },
  description: "Portfolio of Florian Touraine, Engineering Student specialized in AI, Deep Learning, and Cybersecurity. Dual degree at Télécom Nancy & UQAC.",
  keywords: ["AI Engineer", "Cybersecurity", "Deep Learning", "Quantum Computing", "Engineering Student", "Florian Touraine"],
  authors: [{ name: "Florian Touraine" }],
  creator: "Florian Touraine",
  openGraph: {
    title: "Florian Touraine | AI & Cybersecurity Student",
    description: "Exploring the intersection of Intelligence and Security. Discover my projects and academic journey.",
    url: "https://florian-touraine.com", // Updated placeholder
    siteName: "Florian Touraine Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florian Touraine | AI & Cybersecurity Student",
    description: "Engineering student portfolio focusing on AI and Cybersecurity.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col selection:bg-foreground selection:text-background transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {/* Background Aesthetic: Subtle Grid */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#80808012,transparent)]" />
            </div>

            <header>
              <Navbar />
            </header>

            <main className="flex-1 pt-16 relative">
              {children}
            </main>

            <Footer />
            
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
