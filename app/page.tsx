import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Research } from "@/components/research"
import { Education } from "@/components/education"
import { Achievements } from "@/components/achievements"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ThemeSwitcher />
      <Hero />
      <About />
      <Research />
      <Education />
      <Achievements />
    </main>
  )
}
