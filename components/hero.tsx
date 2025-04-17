"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
      </div>

      <div className="section-padding z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="block">Tamirat Bizuneh</span>
            <span className="text-primary text-2xl md:text-3xl lg:text-4xl block mt-2">Renowned Legal Authority</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 mt-6">
            With over 35 years of experience in Ethiopian law, shaping legal precedents and mentoring the next
            generation of legal professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button asChild size="lg" className="px-8">
            <a href="#about">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <p className="text-4xl font-cormorant font-bold text-primary">35+</p>
              <p className="text-sm text-foreground/70">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-cormorant font-bold text-primary">100+</p>
              <p className="text-sm text-foreground/70">Legal Publications</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-cormorant font-bold text-primary">50+</p>
              <p className="text-sm text-foreground/70">Awards & Honors</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <ArrowRight className="h-6 w-6 transform rotate-90 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}

