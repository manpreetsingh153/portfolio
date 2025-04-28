"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const phrases = ["MERN Stack Developer", "Full-Stack Web Developer"]
  const phraseIndex = useRef(0)
  const charIndex = useRef(0)
  const isDeleting = useRef(false)
  const typingSpeed = useRef(100)

  useEffect(() => {
    const typeWriter = () => {
      const currentPhrase = phrases[phraseIndex.current]

      if (isDeleting.current) {
        setTypedText(currentPhrase.substring(0, charIndex.current - 1))
        charIndex.current -= 1
        typingSpeed.current = 50
      } else {
        setTypedText(currentPhrase.substring(0, charIndex.current + 1))
        charIndex.current += 1
        typingSpeed.current = 100
      }

      if (!isDeleting.current && charIndex.current === currentPhrase.length) {
        isDeleting.current = true
        typingSpeed.current = 1500 // Pause at the end
      } else if (isDeleting.current && charIndex.current === 0) {
        isDeleting.current = false
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length
        typingSpeed.current = 500 // Pause before typing next phrase
      }
    }

    const timer = setTimeout(typeWriter, typingSpeed.current)
    return () => clearTimeout(timer)
  }, [typedText])

  return (
    <section id="home" className="pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5 mb-6 md:mb-0 z-10"
          >
            <div className="inline-block bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-4 py-1 rounded-full text-sm font-medium mb-6">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Hi, I'm{" "}
              <span className="relative inline-block">
                Manpreet Singh
                <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200 dark:bg-emerald-800 -z-10"></span>
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-6 h-10">
              {typedText}
              <span className="animate-pulse ml-1">|</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg max-w-2xl">
              I build scalable, responsive, and user-friendly web applications using modern technologies like React,
              Next.js, Node.js, and MongoDB. Let's create something great together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button> */}
              <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white">
                <Link
                  href="/manpreet_resume.pdf"
                  download="Manpreet_Resume.pdf"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
              >
                <Link href="#contact" className="flex items-center">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/5 relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200 dark:bg-emerald-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-300 dark:bg-emerald-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 w-40 h-40 bg-emerald-400 dark:bg-emerald-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
                <img
                  src="/manpreet.png"
                  alt="Manpreet Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 pt-10 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-center">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">5+</h3>
              <p className="text-slate-600 dark:text-slate-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">10</h3>
              <p className="text-slate-600 dark:text-slate-400">Months Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">5</h3>
              <p className="text-slate-600 dark:text-slate-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">10+</h3>
              <p className="text-slate-600 dark:text-slate-400">Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
