"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users } from "lucide-react"

export default function CrewTab() {
  const [task, setTask] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!task.trim()) return

    setIsLoading(true)

    // Simulate AI crew processing (in a real app, this would call your backend)
    setTimeout(() => {
      setResult(
        "This is a placeholder result from the AI crew. Connect to your backend to get real results from Llama-4 agents.",
      )
      setIsLoading(false)
    }, 3000)
  }

  const exampleTasks = [
    "Research and produce a comprehensive report on the latest advancements in quantum computing.",
    "Create a detailed marketing strategy for a new eco-friendly product launching next month.",
    "Analyze the current market trends in renewable energy and provide investment recommendations.",
    "Develop a comprehensive business plan for a startup in the health tech industry.",
    "Write a research paper on the impact of artificial intelligence on the future of work.",
  ]

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)]">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">👥 Crew Agents</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        {/* Task Definition Section */}
        <Card className="bg-background/60 border-border/40">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Define a Task for the AI Crew</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="task" className="text-sm text-muted-foreground">
                  Describe the task in detail:
                </label>
                <Textarea
                  id="task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Research and produce a comprehensive report on the latest advancements in Generative AI..."
                  className="mt-1 resize-none bg-background/60 border-border/40"
                  rows={6}
                />
              </div>

              <Button onClick={handleSubmit} disabled={!task.trim() || isLoading} className="w-full">
                {isLoading ? "Processing..." : "Submit Task"}
              </Button>

              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="examples">
                  <AccordionTrigger className="text-sm">Example Tasks</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      {exampleTasks.map((example, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-left font-normal"
                            onClick={() => setTask(example)}
                          >
                            {example}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="bg-background/60 border-border/40">
          <CardContent className="p-6 h-full flex flex-col">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Crew Results
            </h3>

            <div className="bg-muted/30 rounded-lg p-4 flex-1 overflow-y-auto">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-foreground/50 animate-bounce" />
                    <div className="w-3 h-3 rounded-full bg-foreground/50 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-3 h-3 rounded-full bg-foreground/50 animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <p className="text-sm text-muted-foreground">The AI crew is working on your task...</p>
                </div>
              ) : result ? (
                <div className="text-sm">
                  <h4 className="font-medium mb-2">Task Results:</h4>
                  <p>{result}</p>
                </div>
              ) : (
                <div className="text-center text-muted-foreground h-full flex flex-col items-center justify-center">
                  <Users className="h-12 w-12 mb-4 opacity-50" />
                  <p>Submit a task to see results from the AI crew</p>
                  <p className="text-xs mt-2">
                    The crew consists of Research, Analyst, and Writer agents working together
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
