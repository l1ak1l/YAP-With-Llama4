"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import { useCallback, useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false)

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

      // Close mobile menu if open
      setIsOpen(false)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span role="img" aria-label="llama">
            🦙
          </span>
          <span className="font-bold">Yap with Llama-4</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button onClick={() => scrollToSection("features")} className="transition-colors hover:text-primary">
            Features
          </button>
          <button onClick={() => scrollToSection("about")} className="transition-colors hover:text-primary">
            About
          </button>
          <Link href="https://github.com/meta-llama" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button size="sm" asChild>
            <Link href="/app">Launch App</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="font-bold flex items-center gap-2">
                    <span role="img" aria-label="llama">
                      🦙
                    </span>{" "}
                    Menu
                  </span>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4 mt-6">
                  <button
                    onClick={() => scrollToSection("features")}
                    className="flex py-2 text-sm transition-colors hover:text-primary"
                  >
                    Features
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="flex py-2 text-sm transition-colors hover:text-primary"
                  >
                    About
                  </button>
                  <Link
                    href="https://github.com/meta-llama"
                    target="_blank"
                    rel="noreferrer"
                    className="flex py-2 text-sm transition-colors hover:text-primary"
                  >
                    GitHub
                  </Link>
                </nav>
                <div className="mt-auto pt-4 border-t">
                  <Button className="w-full" asChild>
                    <Link href="/app">Launch App</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
