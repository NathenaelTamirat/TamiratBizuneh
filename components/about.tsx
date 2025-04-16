"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function About() {
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
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair tracking-tight">About Me</h2>
            <p className="text-xl text-muted-foreground">
              A lifetime dedicated to justice, education, and legal excellence in Ethiopia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="biography" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="biography">Biography</TabsTrigger>
                <TabsTrigger value="legacy">Legacy</TabsTrigger>
                <TabsTrigger value="journey">Journey</TabsTrigger>
              </TabsList>
              <TabsContent value="biography" className="space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-lg">
                      Tamirat Bizuneh is a distinguished legal authority in Ethiopia with over 35 years of experience in
                      constitutional law, human rights advocacy, and legal education. Born in Addis Ababa in 1963, he
                      has dedicated his life to advancing the rule of law and justice in Ethiopia.
                    </p>
                    <p className="text-lg">
                      After completing his education at prestigious institutions both locally and internationally,
                      Tamirat returned to Ethiopia with a vision to strengthen the country's legal framework. Throughout
                      his career, he has served in various capacities, including as a judge, legal advisor to government
                      bodies, and professor of law at Ethiopia's leading universities.
                    </p>
                    <p className="text-lg">
                      His expertise in constitutional law has been instrumental in shaping Ethiopia's legal landscape,
                      particularly during periods of significant political transition. Tamirat's commitment to justice
                      and equality has earned him respect and recognition both nationally and internationally.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="legacy" className="space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-lg">
                      Tamirat's legacy is defined by his unwavering commitment to justice and legal education. He has
                      authored numerous influential publications on Ethiopian constitutional law, human rights, and
                      legal reform that continue to shape legal discourse in the country.
                    </p>
                    <p className="text-lg">
                      As a mentor, he has guided hundreds of young lawyers who now occupy key positions in Ethiopia's
                      judiciary, government, and private sector. His teaching philosophy emphasizes ethical practice and
                      social responsibility, instilling these values in generations of legal professionals.
                    </p>
                    <p className="text-lg">
                      Through his advocacy work, Tamirat has contributed significantly to legal reforms that have
                      strengthened human rights protections and access to justice for marginalized communities in
                      Ethiopia. His impact extends beyond the courtroom to policy development and institutional capacity
                      building.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="journey" className="space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-lg">
                      Tamirat's journey in the legal profession began in the early 1980s during a challenging period in
                      Ethiopia's history. Despite political obstacles, he persevered in his studies and early career,
                      demonstrating remarkable resilience and commitment to his principles.
                    </p>
                    <p className="text-lg">
                      His international education and experience, including fellowships at prestigious institutions in
                      Europe and North America, provided him with a global perspective on legal systems that he has
                      effectively applied to the Ethiopian context.
                    </p>
                    <p className="text-lg">
                      Throughout his career, Tamirat has navigated complex political transitions, always maintaining his
                      independence and professional integrity. His ability to adapt to changing circumstances while
                      upholding core legal principles has been a hallmark of his professional journey.
                    </p>
                    <p className="text-lg">
                      Today, at 60, Tamirat continues to be actively engaged in legal scholarship, mentorship, and
                      advocacy, sharing his wealth of knowledge and experience with the next generation of Ethiopian
                      legal professionals.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
