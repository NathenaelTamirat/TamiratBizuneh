"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-primary">Tamirat Bizuneh</span>
            </h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                Tamirat Bizuneh stands as one of Ethiopia's most distinguished legal minds, with a career spanning over
                three decades that has fundamentally shaped the nation's legal landscape.
              </p>
              <p>
                Born in Addis Ababa in 1963, Tamirat's journey in law began at Addis Ababa University, where he
                graduated with highest honors before pursuing advanced studies at Harvard Law School. His return to
                Ethiopia marked the beginning of a remarkable career dedicated to constitutional law, human rights
                advocacy, and judicial reform.
              </p>
              <p>
                As a former Justice of the Federal Supreme Court and legal advisor to multiple administrations, Tamirat
                has been instrumental in drafting landmark legislation that continues to guide Ethiopia's legal
                framework today.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-lg -z-10" />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Legacy</h3>
                <p className="text-foreground/80">
                  Tamirat's contributions to Ethiopian jurisprudence have established precedents that continue to
                  influence legal decisions and policy formation throughout East Africa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Impact</h3>
                <p className="text-foreground/80">
                  Through his work with international organizations, Tamirat has helped bridge Ethiopian legal
                  traditions with global human rights frameworks and constitutional principles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Mentorship</h3>
                <p className="text-foreground/80">
                  As a professor at Addis Ababa University Law School, Tamirat has mentored generations of Ethiopia's
                  brightest legal minds, shaping the future of the country's legal profession.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
