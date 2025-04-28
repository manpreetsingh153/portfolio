import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import SessionProvider from "@/components/SessionProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your Name - Portfolio",
  description: "Full-Stack Web Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} data-new-gr-c-s-check-loaded="14.1232.0" data-gr-ext-installed="">
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html >
  )
}
