"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const papers = [
    {
      title: "Constitutional Reform in Post-Conflict Societies",
      journal: "Harvard International Law Journal",
      year: 2018,
      description:
        "An analysis of constitutional reform processes in post-conflict African nations, with a focus on Ethiopia's experience.",
    },
    {
      title: "Traditional Justice Systems and Modern Legal Frameworks",
      journal: "African Journal of Legal Studies",
      year: 2015,
      description: "Examining the integration of traditional justice mechanisms within Ethiopia's formal legal system.",
    },
    {
      title: "Human Rights Implementation in Federal Systems",
      journal: "International Journal of Constitutional Law",
      year: 2012,
      description:
        "A comparative study of human rights implementation in federal systems, with case studies from Ethiopia and Nigeria.",
    },
    {
      title: "Judicial Independence in Emerging Democracies",
      journal: "Yale Journal of International Law",
      year: 2010,
      description:
        "Analysis of challenges to judicial independence in emerging democracies with recommendations for institutional safeguards.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="research" className="py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research <span className="text-primary">Papers</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            A selection of Tamirat Bizuneh's most influential academic publications that have shaped legal discourse in
            Ethiopia and beyond.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {papers.map((paper, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{paper.title}</CardTitle>
                  <CardDescription>
                    {paper.journal}, {paper.year}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80">{paper.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> PDF
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Cite
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" id="download">
            <a href="#" className="inline-flex items-center">
              <Download className="mr-2 h-4 w-4" /> Download Complete CV
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
