"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "MindCodeLab Website",
      description: "A professional website for MindCodeLab, showcasing company services and offerings.",
      technologies: ["React", "CodeIgniter", "HTML", "CSS", "Bootstrap"],
      image: "Software Development Company in Mohali _ Chandigarh.gif",
      liveLink: "https://mindcodelab.pro",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Evyapari Book-Selling Platform",
      description: "E-commerce platform with dynamic product listings and responsive UI.",
      technologies: ["React", "PHP", "HTML", "CSS", "Bootstrap"],
      image: "/E-Vyapari.gif",
      liveLink: "https://evyapari.com",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Truck Management System",
      description: "Logistics platform for tracking and managing trucks efficiently.",
      technologies: ["React", "CodeIgniter", "HTML", "CSS", "Bootstrap"],
      image: "/frieghtlogin.png",
      liveLink: "https://jalandharraipurlogistics.com",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Invoice Generator App",
      description: "Tool for creating professional invoices with auto-calculation and PDF export.",
      technologies: ["Next.js", "HTML", "CSS", "Bootstrap"],
      image: "/utlity.png",
      liveLink: "https://app.utlity.in",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Training Center Website",
      description: "Informational website for a training institute with responsive design.",
      technologies: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript"],
      image: "/smarto.png",
      liveLink: "https://smarto.one",
      githubLink: "#",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Update the Projects component to support dark mode
  return (
    <section id="projects" className="py-20 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            My Work
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            Here are some of the projects I've worked on. Each project represents my skills and experience in different
            areas of web development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card
                className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-slate-200 dark:border-slate-700 dark:bg-slate-800"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="h-40 sm:h-48 overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      activeProject === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-emerald-900/70 flex items-center justify-center transition-opacity duration-300 ${
                      activeProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white border-white hover:bg-white hover:text-emerald-900"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6 flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 text-xs sm:text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 sm:p-6 pt-0 flex justify-between border-t border-slate-100 dark:border-slate-700">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
