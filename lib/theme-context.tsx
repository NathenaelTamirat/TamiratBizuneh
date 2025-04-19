"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Theme = "light" | "dark" | "gold-dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.remove("light", "dark", "gold-dark")
      document.documentElement.classList.add(savedTheme)
    } else {
      // Set default theme if none is saved
      setTheme("light")
      document.documentElement.classList.add("light")
    }
  }, [])

  const updateTheme = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.remove("light", "dark", "gold-dark")
    document.documentElement.classList.add(newTheme)
    setTheme(newTheme)
  }

  return <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }
  return context
}
