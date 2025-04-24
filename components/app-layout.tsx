"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import ChatTab from "@/components/tabs/chat-tab"
import OcrTab from "@/components/tabs/ocr-tab"
import RagTab from "@/components/tabs/rag-tab"
import CrewTab from "@/components/tabs/crew-tab"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type TabType = "chat" | "ocr" | "rag" | "crew"

export default function AppLayout() {
  const [activeTab, setActiveTab] = useState<TabType>("chat")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    setSidebarOpen(false)
  }

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar Trigger */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[250px] sm:w-[300px]">
            <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden pt-16 md:pt-0">
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
