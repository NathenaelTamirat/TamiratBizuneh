import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Research from "@/components/research"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import DownloadCV from "@/components/download-cv"

export const metadata: Metadata = {
  title: "Tamirat Bizuneh | Renowned Legal Authority",
  description: "Portfolio of Tamirat Bizuneh, a renowned legal authority in Ethiopia with over 35 years of experience.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Research />
      <Education />
      <Achievements />
      <DownloadCV />
    </main>
  )
}
