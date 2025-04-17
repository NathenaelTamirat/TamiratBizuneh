"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const educationTimeline = [
  {
    year: "1985-1989",
    degree: "Bachelor of Laws (LL.B.)",
    institution: "Addis Ababa University",
    description: "Graduated with highest honors, specializing in constitutional law and human rights.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    year: "1990-1992",
    degree: "Master of Laws (LL.M.)",
    institution: "Harvard Law School, USA",
    description: "Specialized in comparative constitutional law with focus on federal systems and judicial review.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    year: "1995-1999",
    degree: "Doctor of Juridical Science (S.J.D.)",
    institution: "University of Oxford, UK",
    description:
      "Dissertation on 'Constitutional Development in Post-Revolutionary Ethiopia: Challenges and Prospects'.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    year: "2005",
    degree: "Advanced Certificate in Human Rights Law",
    institution: "International Institute of Human Rights, Strasbourg",
    description: "Specialized training in international human rights mechanisms and their domestic application.",
    icon: <BookOpen className="h-6 w-6" />,
  },
]

export default function Education() {
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
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair tracking-tight">Education</h2>
            <p className="text-xl text-muted-foreground">
              Academic journey and qualifications that shaped my legal expertise.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center transform -translate-x-1/2 z-10">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold font-playfair">{item.degree}</h3>
                            <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                              {item.year}
                            </span>
                          </div>
                          <p className="text-lg font-medium">{item.institution}</p>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
