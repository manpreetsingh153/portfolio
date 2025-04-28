"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const Experience = () => {
  const experience = [
    {
      title: "MERN Stack Developer",
      company: "MindCodeLab Pvt. Ltd.",
      period: "March 2024 – Jan 2025",
      description: [
        "Developed full-stack applications using React, Next.js, Node.js, and MySQL",
        "Collaborated on UI/UX improvements and API integration",
        "Delivered clean, maintainable code in a fast-paced, agile environment",
      ],
      skills: ["React", "Next.js", "Node.js", "MySQL", "API Integration", "UI/UX"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Work Experience
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            My professional experience has equipped me with practical skills and industry knowledge in web development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="mb-8 border-slate-200 dark:border-slate-700 overflow-hidden dark:bg-slate-800">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 sm:p-6 md:w-1/3">
                      <div className="flex items-center mb-4">
                        <Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-2">{job.company}</p>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {job.period}
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 md:w-2/3">
                      <ul className="space-y-2 mb-4">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="text-slate-600 dark:text-slate-400 flex items-start">
                            <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800/70 text-xs sm:text-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
