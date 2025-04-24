"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import { useCallback } from "react"

export default function LandingFooter() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = 56 // 3.5rem = 56px
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:py-12 px-4">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Yap with Llama-4</h2>
          <p className="text-sm text-muted-foreground">Powerful AI assistant platform powered by Llama-4.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/app" className="text-muted-foreground transition-colors hover:text-primary">
                  App
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About Us
                </button>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/meta-llama"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/MetaAI"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/meta"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6 px-4">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yap with Llama-4. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
