"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Database, Upload, X } from "lucide-react"

export default function RagTab() {
  const [files, setFiles] = useState<File[]>([])
  const [query, setQuery] = useState("")
  const [answer, setAnswer] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles))
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim() || files.length === 0) return

    setIsLoading(true)

    // Simulate RAG processing (in a real app, this would call your backend)
    setTimeout(() => {
      setAnswer(
        "This is a placeholder answer based on your documents. Connect to your backend to get real RAG results from Llama-4.",
      )
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)]">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">📚 Retrieval-Augmented Generation (RAG)</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 flex-1">
        {/* Document Upload Section */}
        <Card className="lg:col-span-2 bg-background/60 border-border/40">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Upload Documents</h3>
            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <div className="py-4 flex flex-col items-center">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground mb-2">Drag and drop files here</p>
                  <p className="text-xs text-muted-foreground mb-4">Limit 200MB per file • PDF, TXT, CSV</p>
                </div>
                <input
                  type="file"
                  id="document-upload"
                  className="hidden"
                  accept=".pdf,.txt,.csv"
                  multiple
                  onChange={handleFileChange}
                />
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("document-upload")?.click()}
                  className="mt-2"
                >
                  Browse files
                </Button>
              </div>

              {/* File List */}
              {files.length > 0 && (
                <div className="space-y-2 mt-4">
                  <h4 className="text-sm font-medium">Uploaded Files</h4>
                  <div className="max-h-40 overflow-y-auto space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-muted/30 p-2 rounded-md">
                        <div className="flex items-center">
                          <Database className="h-4 w-4 mr-2" />
                          <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFile(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Query and Results Section */}
        <Card className="lg:col-span-3 bg-background/60 border-border/40 flex flex-col">
          <CardContent className="p-6 flex flex-col h-full">
            <h3 className="text-lg font-medium mb-4">Ask Questions About Your Documents</h3>

            {/* Query Input */}
            <div className="mb-4">
              <Textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask a question about your documents..."
                className="resize-none bg-background/60 border-border/40"
                rows={3}
              />
              <Button
                onClick={handleSubmit}
                disabled={!query.trim() || files.length === 0 || isLoading}
                className="mt-2 w-full"
              >
                {isLoading ? "Processing..." : "Submit Question"}
              </Button>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-hidden">
              <h4 className="text-sm font-medium mb-2">Answer</h4>
              <div className="bg-muted/30 rounded-lg p-4 h-[calc(100%-2rem)] overflow-y-auto">
                {isLoading ? (
                  <div className="flex justify-center items-center h-full">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-foreground/50 animate-bounce" />
                      <div className="w-3 h-3 rounded-full bg-foreground/50 animate-bounce [animation-delay:0.2s]" />
                      <div className="w-3 h-3 rounded-full bg-foreground/50 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                ) : answer ? (
                  <div className="text-sm">{answer}</div>
                ) : (
                  <div className="text-center text-muted-foreground h-full flex items-center justify-center">
                    <p>Upload documents and ask a question to see results here</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
