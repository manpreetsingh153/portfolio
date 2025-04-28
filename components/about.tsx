"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, BrainCircuit } from "lucide-react"

const About = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 65 },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get to Know Me
          </h2>
          <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            I'm a passionate and motivated full-stack web developer with 10 months of hands-on experience building
            dynamic web applications. I specialize in the MERN stack and enjoy turning complex problems into elegant
            digital solutions. I believe in clean code, continuous learning, and building software that makes an impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-4 md:mb-6">
              Technical Skills
            </h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                    <div
                      className="bg-emerald-600 dark:bg-emerald-500 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 md:mt-0"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-4 md:mb-6">
              My Expertise
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
            >
              <motion.div
                variants={item}
                className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Frontend Development
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Building responsive and interactive user interfaces with React & Next.js
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Backend Development
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Creating robust server-side applications with Node.js & Express
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Database Management
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Working with MongoDB & MySQL to store and manage application data
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BrainCircuit className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Problem Solving
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Analytical thinking and creative solutions to complex challenges
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
