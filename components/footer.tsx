"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">Manpreet</span>
              <span className="text-emerald-400">.dev</span>
            </Link>
            <p className="mt-2 text-slate-400 max-w-md text-center md:text-left">
              A passionate MERN stack developer specializing in creating responsive and user-friendly web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/manpreetsingh153"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/manpreetsingh153"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:manpreetsinghgdr153@gmail.com"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">&copy; {currentYear} Manpreet Singh. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
            <Link href="#home" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Experience
            </Link>
            <Link href="#education" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </nav>

          <button
            onClick={scrollToTop}
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white p-3 rounded-full transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
