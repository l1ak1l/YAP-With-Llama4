"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useCallback } from "react"

export default function LandingNavbar() {
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span role="img" aria-label="llama">
            🦙
          </span>
          <span className="font-bold">Yap with Llama-4</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <button onClick={() => scrollToSection("features")} className="transition-colors hover:text-primary">
            Features
          </button>
          <button onClick={() => scrollToSection("about")} className="transition-colors hover:text-primary">
            About
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/meta-llama" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button size="sm" asChild>
            <Link href="/app">Launch App</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
