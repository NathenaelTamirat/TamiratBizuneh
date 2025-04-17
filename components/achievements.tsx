"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const achievements = [
  {
    title: "Ethiopian Legal Scholar of the Year",
    year: "2021",
    organization: "Ethiopian Bar Association",
    category: "Award",
  },
  {
    title: "Presidential Medal for Legal Excellence",
    year: "2018",
    organization: "Federal Government of Ethiopia",
    category: "Honor",
  },
  {
    title: "Distinguished Professor of Constitutional Law",
    year: "2015",
    organization: "Addis Ababa University",
    category: "Academic",
  },
  {
    title: "Human Rights Defender Award",
    year: "2012",
    organization: "International Commission of Jurists",
    category: "International",
  },
  {
    title: "Legal Reform Contribution Award",
    year: "2010",
    organization: "Ministry of Justice",
    category: "Government",
  },
  {
    title: "Visiting Scholar",
    year: "2008",
    organization: "Yale Law School",
    category: "Academic",
  },
  {
    title: "Constitutional Drafting Committee Member",
    year: "2005",
    organization: "Constitutional Assembly of Ethiopia",
    category: "Government",
  },
  {
    title: "Legal Education Excellence Award",
    year: "2002",
    organization: "African Law Schools Association",
    category: "Education",
  },
  {
    title: "Distinguished Service to Justice",
    year: "1999",
    organization: "Supreme Court of Ethiopia",
    category: "Judicial",
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  const getCategoryColor = (category) => {
    const colors = {
      Award: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
      Honor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      Academic: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      International: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      Government: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      Education: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
      Judicial: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    }
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  }

  return (
    <section id="achievements" className="py-20 md:py-32">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair tracking-tight">Achievements</h2>
            <p className="text-xl text-muted-foreground">Recognition and honors received throughout my legal career.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getCategoryColor(achievement.category)}>{achievement.category}</Badge>
                      <span className="text-sm font-medium">{achievement.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mt-auto">{achievement.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
