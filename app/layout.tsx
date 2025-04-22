import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yap with Llama-4 - AI Assistant Platform",
  description: "Interact with Llama-4 through chat, RAG, OCR, and AI agents for research, analysis, and writing.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}
