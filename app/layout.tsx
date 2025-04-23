import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeContextProvider } from "@/components/theme-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Tamirat Bizuneh | Legal Authority",
  description: "Portfolio of Tamirat Bizuneh, renowned legal authority in Ethiopia",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </ThemeProvider>
        <footer className="py-6 text-center text-sm">
          <p>© Nathenael Tamirat | +251991439979</p>
        </footer>
      </body>
    </html>
  )
}
