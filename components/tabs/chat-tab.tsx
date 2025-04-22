"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ChatTab() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const newMessages = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")
    setIsLoading(true)

    // Simulate AI response (in a real app, this would call your backend)
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "This is a placeholder response. Connect to your backend to get real responses from Llama-4.",
        },
      ])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)]">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">💬 Chat</h2>
      </div>

      {/* Chat Messages */}
      <Card className="flex-1 overflow-y-auto mb-4 bg-background/60 border-border/40">
        <CardContent className="p-4">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              Start a conversation with Llama-4
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-muted text-foreground">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 resize-none bg-background/60 border-border/40"
          rows={2}
        />
        <Button type="submit" disabled={isLoading || !input.trim()}>
          Send
        </Button>
      </form>
    </div>
  )
}
