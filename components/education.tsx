"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, BookOpen, Briefcase, Globe, Users } from "lucide-react"

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const achievements = [
    {
      title: "Ethiopian Constitutional Scholar of the Decade",
      year: "2020",
      organization: "Ethiopian Legal Scholars Association",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Order of Merit, First Class",
      year: "2018",
      organization: "Federal Democratic Republic of Ethiopia",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Distinguished Service Medal",
      year: "2015",
      organization: "Ethiopian Federal Supreme Court",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
      title: "Human Rights Defender Award",
      year: "2012",
      organization: "African Union Commission",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "International Rule of Law Medal",
      year: "2010",
      organization: "International Bar Association",
      icon: <Globe className="h-8 w-8 text-primary" />,
    },
    {
      title: "Legal Education Excellence Award",
      year: "2008",
      organization: "Addis Ababa University",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Distinguished Alumni Award",
      year: "2005",
      organization: "Harvard Law School Association",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Constitutional Drafting Committee Recognition",
      year: "1995",
      organization: "Transitional Government of Ethiopia",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
      title: "Yale Law School International Scholar",
      year: "1992",
      organization: "Yale Law School",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
  ]

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="achievements" className="py-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Throughout his distinguished career, Tamirat Bizuneh has received numerous accolades recognizing his
            contributions to law and justice.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">{achievement.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-foreground/70 text-sm">
                    {achievement.organization}, {achievement.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/80 italic">
            "These recognitions reflect not personal achievement, but the collective progress of Ethiopia's legal
            community."
          </p>
          <p className="text-primary font-medium mt-2">— Tamirat Bizuneh</p>
        </motion.div>
      </div>
    </section>
  )
}
