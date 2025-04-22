"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import ChatTab from "@/components/tabs/chat-tab"
import OcrTab from "@/components/tabs/ocr-tab"
import RagTab from "@/components/tabs/rag-tab"
import CrewTab from "@/components/tabs/crew-tab"

type TabType = "chat" | "ocr" | "rag" | "crew"

export default function AppLayout() {
  const [activeTab, setActiveTab] = useState<TabType>("chat")

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
          {activeTab === "chat" && <ChatTab />}
          {activeTab === "ocr" && <OcrTab />}
          {activeTab === "rag" && <RagTab />}
          {activeTab === "crew" && <CrewTab />}
        </div>
      </main>
    </div>
  )
}
