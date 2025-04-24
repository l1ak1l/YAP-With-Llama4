"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, FileText, MessageSquare, Users } from "lucide-react"
import LandingNavbar from "@/components/landing-navbar"
import LandingFooter from "@/components/landing-footer"
import { useCallback } from "react"

export default function LandingPage() {
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
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <LandingNavbar />

        {/* Hero Section */}
        <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-6 md:space-y-8 py-16 md:py-24 text-center px-4">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-transparent">
              Yap with Llama-4
              <br />
              <span className="text-gray-400">AI Assistant Platform</span>
            </h1>
            <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
              Harness the power of Llama-4 with an all-in-one platform featuring chat, RAG, OCR, and collaborative AI
              agents for research, analysis, and writing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/app">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("features")}
            >
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container space-y-12 md:space-y-16 py-16 md:py-24 px-4">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.1]">Powerful Features</h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base md:text-lg">
              Explore the capabilities of Llama-4 through our intuitive interface
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="relative overflow-hidden rounded-lg border bg-background p-6 md:p-8">
              <div className="flex items-center gap-4">
                <MessageSquare className="h-6 w-6 md:h-8 md:w-8" />
                <h3 className="font-bold text-base md:text-lg">Llama Chatbot</h3>
              </div>
              <p className="mt-2 text-muted-foreground text-sm md:text-base">
                Engage in natural conversations with Llama-4, one of the most advanced open-source language models.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6 md:p-8">
              <div className="flex items-center gap-4">
                <FileText className="h-6 w-6 md:h-8 md:w-8" />
                <h3 className="font-bold text-base md:text-lg">OCR Capabilities</h3>
              </div>
              <p className="mt-2 text-muted-foreground text-sm md:text-base">
                Extract text from images and documents with high accuracy using Llama-4's vision capabilities.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6 md:p-8">
              <div className="flex items-center gap-4">
                <Brain className="h-6 w-6 md:h-8 md:w-8" />
                <h3 className="font-bold text-base md:text-lg">RAG with Evaluation</h3>
              </div>
              <p className="mt-2 text-muted-foreground text-sm md:text-base">
                Upload documents and get accurate answers with retrieval-augmented generation and built-in evaluation
                metrics.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6 md:p-8">
              <div className="flex items-center gap-4">
                <Users className="h-6 w-6 md:h-8 md:w-8" />
                <h3 className="font-bold text-base md:text-lg">Crew Agents</h3>
              </div>
              <p className="mt-2 text-muted-foreground text-sm md:text-base">
                Leverage specialized AI agents for research, analysis, and writing that work together to solve complex
                tasks.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-16 md:py-24 px-4">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.1] mb-6 md:mb-8">About Llama-4</h2>
            <div className="prose prose-invert mx-auto">
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Llama-4 is Meta's most advanced open-source large language model, designed to be helpful, safe, and
                versatile across a wide range of applications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left mt-8 md:mt-12">
                <div className="bg-background/60 p-4 md:p-6 rounded-lg border">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Multi-Modal Capabilities</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Llama-4 can understand and process both text and images, enabling it to analyze visual content,
                    extract text from images, and provide comprehensive responses based on visual information.
                  </p>
                </div>

                <div className="bg-background/60 p-4 md:p-6 rounded-lg border">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Multi-Lingual Support</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    With support for over 30 languages, Llama-4 can understand and generate content across multiple
                    languages, making it accessible to a global audience and useful for translation tasks.
                  </p>
                </div>

                <div className="bg-background/60 p-4 md:p-6 rounded-lg border">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Extended Context Window</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Llama-4 features an impressive 128K token context window, allowing it to process and maintain
                    coherence across very long documents, conversations, and complex tasks that require significant
                    memory.
                  </p>
                </div>

                <div className="bg-background/60 p-4 md:p-6 rounded-lg border">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Advanced Reasoning</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    With enhanced reasoning capabilities, Llama-4 excels at complex problem-solving, logical deduction,
                    and step-by-step analysis, making it ideal for research, analysis, and collaborative AI agent
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t">
          <div className="container flex flex-col items-center gap-4 py-16 md:py-24 text-center px-4">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.1]">Ready to experience Llama-4?</h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-base md:text-lg">
              Join the growing community of users leveraging Llama-4's capabilities for chat, document analysis, and
              collaborative AI tasks.
            </p>
            <Button size="lg" className="mt-4 w-full sm:w-auto" asChild>
              <Link href="/app">Launch App</Link>
            </Button>
          </div>
        </section>

        <LandingFooter />
      </div>
    </div>
  )
}
