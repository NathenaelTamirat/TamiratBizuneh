"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

const researchPapers = [
  {
    title: "Constitutional Reform in Ethiopia: Historical Context and Future Directions",
    year: 2022,
    journal: "Ethiopian Law Review",
    abstract:
      "This paper examines the historical development of constitutional law in Ethiopia and proposes frameworks for future reforms that address contemporary challenges.",
    link: "#",
  },
  {
    title: "Human Rights Protection Mechanisms in the Horn of Africa: A Comparative Analysis",
    year: 2020,
    journal: "African Human Rights Law Journal",
    abstract:
      "A comprehensive analysis of human rights protection systems across countries in the Horn of Africa, with special focus on institutional frameworks and implementation challenges.",
    link: "#",
  },
  {
    title: "Judicial Independence and the Rule of Law in Ethiopia's Federal System",
    year: 2018,
    journal: "Journal of Ethiopian Legal Studies",
    abstract:
      "This study evaluates the state of judicial independence in Ethiopia's federal structure and its implications for the rule of law and access to justice.",
    link: "#",
  },
  {
    title: "Traditional Dispute Resolution Mechanisms and Their Integration with Formal Legal Systems in Ethiopia",
    year: 2016,
    journal: "International Journal of Legal Pluralism",
    abstract:
      "An examination of Ethiopia's traditional dispute resolution practices and strategies for their effective integration with the formal justice system.",
    link: "#",
  },
]

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="research" className="py-20 md:py-32">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair tracking-tight">Research Papers</h2>
            <p className="text-xl text-muted-foreground">
              Selected publications showcasing my contributions to legal scholarship.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPapers.map((paper, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-playfair">{paper.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {paper.journal}, {paper.year}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>{paper.abstract}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2" asChild>
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        View Details
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Button variant="outline" size="lg">
              View All Publications
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
