"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Upload } from "lucide-react"

export default function OcrTab() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [extractedText, setExtractedText] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)

    if (selectedFile) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
      setExtractedText(null)
    } else {
      setPreview(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setIsLoading(true)

    // Simulate OCR processing (in a real app, this would call your backend)
    setTimeout(() => {
      setExtractedText(
        "This is placeholder extracted text. Connect to your backend to get real OCR results from Llama-4.",
      )
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-2rem)]">
      <div className="flex items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold">📄 OCR</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
        {/* Upload Section */}
        <Card className="bg-background/60 border-border/40">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Upload an image</h3>
            <div className="space-y-4">
              <div
                className={`border-2 border-dashed rounded-lg p-4 md:p-6 text-center ${
                  preview ? "border-primary" : "border-border"
                }`}
              >
                {preview ? (
                  <div className="space-y-3 md:space-y-4">
                    <img src={preview || "/placeholder.svg"} alt="Preview" className="max-h-48 md:max-h-64 mx-auto" />
                    <p className="text-xs md:text-sm text-muted-foreground">{file?.name}</p>
                  </div>
                ) : (
                  <div className="py-6 md:py-8 flex flex-col items-center">
                    <Upload className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground mb-2" />
                    <p className="text-sm md:text-base text-muted-foreground mb-2">Drag and drop file here</p>
                    <p className="text-xs text-muted-foreground mb-3 md:mb-4">Limit 200MB per file • JPG, JPEG, PNG</p>
                  </div>
                )}
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={handleFileChange}
                />
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("file-upload")?.click()}
                  className="mt-2"
                  size="sm"
                >
                  Browse files
                </Button>
              </div>

              <Button onClick={handleSubmit} disabled={!file || isLoading} className="w-full">
                {isLoading ? "Processing..." : "Extract Text"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="bg-background/60 border-border/40">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4 flex items-center">
              <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Extracted Text
            </h3>
            <div className="bg-muted/30 rounded-lg p-3 md:p-4 h-[calc(100%-3rem)] overflow-y-auto">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-foreground/50 animate-bounce" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-foreground/50 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-foreground/50 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              ) : extractedText ? (
                <pre className="whitespace-pre-wrap text-xs md:text-sm">{extractedText}</pre>
              ) : (
                <div className="text-center text-muted-foreground h-full flex items-center justify-center text-sm">
                  <p>Upload an image and extract text to see results here</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
