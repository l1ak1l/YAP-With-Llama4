"use client"

import { MessageSquare, FileText, Database, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

type TabType = "chat" | "ocr" | "rag" | "crew"

interface SidebarProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col h-screen">
      <div className="p-4 border-b border-border/40">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span role="img" aria-label="llama">
            🦙
          </span>{" "}
          Yap with Llama-4
        </h1>
      </div>

      {/* Model Configuration */}
      <div className="p-4 border-b border-border/40">
        <h2 className="text-sm font-medium mb-2">Model Configuration</h2>
        <div className="space-y-2">
          <div>
            <label htmlFor="model" className="text-xs text-muted-foreground">
              Select Model
            </label>
            <Select defaultValue="meta-llama/llama-4-scout-17b">
              <SelectTrigger id="model" className="w-full text-xs">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="meta-llama/llama-4-scout-17b">meta-llama/llama-4-scout-17b</SelectItem>
                <SelectItem value="meta-llama/llama-4-scout-8b">meta-llama/llama-4-scout-8b</SelectItem>
                <SelectItem value="meta-llama/llama-3-70b">meta-llama/llama-3-70b</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 flex-1">
        <h2 className="text-sm font-medium mb-2">Features</h2>
        <nav className="space-y-1">
          <Button
            variant={activeTab === "chat" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("chat")}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat
          </Button>
          <Button
            variant={activeTab === "ocr" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("ocr")}
          >
            <FileText className="mr-2 h-4 w-4" />
            OCR
          </Button>
          <Button
            variant={activeTab === "rag" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("rag")}
          >
            <Database className="mr-2 h-4 w-4" />
            RAG with Evaluation
          </Button>
          <Button
            variant={activeTab === "crew" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("crew")}
          >
            <Users className="mr-2 h-4 w-4" />
            Crew Agents
          </Button>
        </nav>
      </div>

      {/* Setup Instructions */}
      <div className="p-4 border-t border-border/40">
        <h2 className="text-sm font-medium mb-2">Setup Instructions</h2>
        <ul className="text-xs space-y-1 text-muted-foreground">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Use .env file available at root folder</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Add your API keys as follows:</span>
          </li>
        </ul>
        <div className="mt-2 p-2 bg-muted/30 rounded text-xs font-mono">
          <div>GROQ_API_KEY=your_key_here</div>
          <div>GOOGLE_API_KEY=your_key_here</div>
        </div>
      </div>
      <div className="p-4 mt-auto border-t border-border/40">
        <Link href="/">
          <Button variant="outline" className="w-full">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
