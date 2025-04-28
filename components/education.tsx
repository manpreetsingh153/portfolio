"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Swami Vivekanand Institute of Engineering and Technology",
      location: "Punjab",
      period: "2021 – 2025",
      details: "Currently pursuing with focus on full-stack development and software engineering principles.",
    },
    {
      degree: "Senior Secondary (12th), Non-Medical",
      institution: "Jhunjhunu Academy",
      location: "Rajasthan",
      period: "Completed",
      details: "Percentage: 82%",
    },
    {
      degree: "High School (10th)",
      institution: "Jhunjhunu Academy",
      location: "Rajasthan",
      period: "Completed",
      details: "Percentage: 80%",
    },
  ]

  return (
    <section id="education" className="py-20 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Education
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Academic Background
          </h2>
          <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            My educational journey has provided me with a strong foundation in computer science and engineering
            principles.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-200 dark:bg-emerald-800"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-8 md:mb-12"
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 dark:bg-emerald-500 border-4 border-white dark:border-slate-900 shadow"></div>
                </div>

                <Card
                  className={`w-full md:w-5/12 border-slate-200 dark:border-slate-700 dark:bg-slate-800 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-1">{edu.institution}</p>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">{edu.location}</p>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.period}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">{edu.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
