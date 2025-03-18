"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, Loader2, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { STEPS } from "../_config"

type Message = {
  id: string
  content: string
  sender: "bot" | "user"
  timestamp: Date
}

// Update the UserInfo type to replace 'work' with 'phone' and 'requirements'
type UserInfo = {
  name: string
  email: string
  phone: string
  requirements: string
}

// Update the STEPS constant to reflect the new flow
type Step = (typeof STEPS)[number]

const EnhancedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<Step>("intro")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "👋 Hi there! I'd like to get to know you better. Can I ask you a few questions?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  // In the EnhancedChatbot component, update the userInfo state
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  })
  const [inputValue, setInputValue] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Update the handleNextStep function to handle phone and requirements instead of work
  const handleNextStep = async (userInput: string) => {
    // Add user message to chat
    if (userInput.trim()) {
      const newUserMessage: Message = {
        id: Date.now().toString(),
        content: userInput,
        sender: "user",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, newUserMessage])
    }

    // Clear input
    setInputValue("")

    // Process based on current step
    switch (currentStep) {
      case "intro":
        setTimeout(() => {
          const newBotMessage: Message = {
            id: Date.now().toString(),
            content: "What's your name?",
            sender: "bot",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, newBotMessage])
          setCurrentStep("name")
        }, 500)
        break

      case "name":
        setUserInfo((prev) => ({ ...prev, name: userInput }))
        setTimeout(() => {
          const newBotMessage: Message = {
            id: Date.now().toString(),
            content: `Nice to meet you, ${userInput}! What's your email address?`,
            sender: "bot",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, newBotMessage])
          setCurrentStep("email")
        }, 500)
        break

      case "email":
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(userInput)) {
          setTimeout(() => {
            const newBotMessage: Message = {
              id: Date.now().toString(),
              content: "That doesn't look like a valid email address. Could you please try again?",
              sender: "bot",
              timestamp: new Date(),
            }
            setMessages((prev) => [...prev, newBotMessage])
          }, 500)
          return
        }

        setUserInfo((prev) => ({ ...prev, email: userInput }))
        setTimeout(() => {
          const newBotMessage: Message = {
            id: Date.now().toString(),
            content: "Great! What's your phone number?",
            sender: "bot",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, newBotMessage])
          setCurrentStep("phone")
        }, 500)
        break

      case "phone":
        // Simple phone validation (accepts various formats)
        const phoneRegex = /^[\d+\-$$$$ ]{7,15}$/
        if (!phoneRegex.test(userInput)) {
          setTimeout(() => {
            const newBotMessage: Message = {
              id: Date.now().toString(),
              content: "That doesn't look like a valid phone number. Please enter a valid phone number.",
              sender: "bot",
              timestamp: new Date(),
            }
            setMessages((prev) => [...prev, newBotMessage])
          }, 500)
          return
        }

        setUserInfo((prev) => ({ ...prev, phone: userInput }))
        setTimeout(() => {
          const newBotMessage: Message = {
            id: Date.now().toString(),
            content: "Perfect! Please tell me about your requirements or preferences.",
            sender: "bot",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, newBotMessage])
          setCurrentStep("requirements")
        }, 500)
        break

      case "requirements":
        setUserInfo((prev) => ({ ...prev, requirements: userInput }))
        setTimeout(() => {
          const newBotMessage: Message = {
            id: Date.now().toString(),
            content: `Thanks for sharing! Here's what I've got:
            
Name: ${userInfo.name}
Email: ${userInfo.email}
Phone: ${userInfo.phone}
Requirements: ${userInput}

Is this information correct?`,
            sender: "bot",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, newBotMessage])
          setCurrentStep("confirmation")
        }, 500)
        break

      case "confirmation":
        if (
          userInput.toLowerCase().includes("yes") ||
          userInput.toLowerCase().includes("correct") ||
          userInput.toLowerCase().includes("right")
        ) {
          // Submit data to API
          setIsSubmitting(true)
          try {
            const response = await fetch("/api/v1/contacts", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: userInfo.name,
                email: userInfo.email,
                phone: userInfo.phone,
                message: userInfo.requirements,
                service:""
              }),
            })

            if (!response.ok) {
              throw new Error("Failed to submit information")
            }

            setTimeout(() => {
              const newBotMessage: Message = {
                id: Date.now().toString(),
                content:
                  "Thank you! Your information has been saved successfully. Is there anything else I can help you with?",
                sender: "bot",
                timestamp: new Date(),
              }
              setMessages((prev) => [...prev, newBotMessage])
              setCurrentStep("success")
              setIsSubmitting(false)
            }, 1000)
          } catch (err) {
            console.log(err)
            setError("There was an error submitting your information. Please try again.")
            setIsSubmitting(false)
            setTimeout(() => {
              const newBotMessage: Message = {
                id: Date.now().toString(),
                content: "I'm sorry, there was an error submitting your information. Would you like to try again?",
                sender: "bot",
                timestamp: new Date(),
              }
              setMessages((prev) => [...prev, newBotMessage])
            }, 500)
          }
        } else {
          setTimeout(() => {
            const newBotMessage: Message = {
              id: Date.now().toString(),
              content: "Let's fix that. What would you like to correct? (name, email, phone, or requirements)",
              sender: "bot",
              timestamp: new Date(),
            }
            setMessages((prev) => [...prev, newBotMessage])

            // Go back to the appropriate step based on user response
            if (userInput.toLowerCase().includes("name")) {
              setCurrentStep("name")
            } else if (userInput.toLowerCase().includes("email")) {
              setCurrentStep("email")
            } else if (userInput.toLowerCase().includes("phone")) {
              setCurrentStep("phone")
            } else if (
              userInput.toLowerCase().includes("requirements") ||
              userInput.toLowerCase().includes("preference")
            ) {
              setCurrentStep("requirements")
            } else {
              // If unclear, ask again for name
              setCurrentStep("name")
            }
          }, 500)
        }
        break

      case "success":
        setTimeout(() => {
          const newBotMessage: Message = {
            id: Date.now().toString(),
            content: "Is there anything specific you'd like to know or discuss?",
            sender: "bot",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, newBotMessage])
        }, 500)
        break
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() === "") return

    handleNextStep(inputValue)
  }

  // Update the resetChat function
  const resetChat = () => {
    setMessages([
      {
        id: "1",
        content: "👋 Hi there! I'd like to get to know you better. Can I ask you a few questions?",
        sender: "bot",
        timestamp: new Date(),
      },
    ])
    setUserInfo({
      name: "",
      email: "",
      phone: "",
      requirements: "",
    })
    setCurrentStep("intro")
    setError(null)
  }

  return (
    <div className="fixed bottom-4 left-6 z-50">
      {isOpen ? (
        <Card className="w-80 sm:w-96 h-[500px] flex flex-col shadow-lg border-primary/10 animate-in slide-in-from-bottom-10 duration-300">
          <CardHeader className="p-4 border-b flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 bg-primary">
                <AvatarFallback>AI</AvatarFallback>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Chatbot" />
              </Avatar>
              <h2 className="text-lg font-semibold">Assistant</h2>
            </div>
            <div className="flex gap-2">
              {currentStep === "success" && (
                <Button variant="ghost" size="icon" onClick={resetChat} className="h-8 w-8">
                  <Briefcase className="h-4 w-4" />
                  <span className="sr-only">Reset chat</span>
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-2 max-w-[85%] animate-in slide-in-from-bottom-2 duration-200",
                  message.sender === "user" ? "ml-auto" : "",
                )}
              >
                {message.sender === "bot" && (
                  <Avatar className="h-8 w-8 mt-0.5 bg-primary">
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Chatbot" />
                  </Avatar>
                )}

                <div
                  className={cn(
                    "rounded-lg p-3",
                    message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                  )}
                >
                  <p className="whitespace-pre-line text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>

                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 mt-0.5 bg-primary/80">
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isSubmitting && (
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 bg-primary">
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Chatbot" />
                </Avatar>
                <div className="bg-muted rounded-lg p-3">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}

            {error && <div className="bg-destructive/10 text-destructive rounded-lg p-3 text-sm">{error}</div>}

            <div ref={messagesEndRef} />
          </CardContent>
          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                ref={inputRef}
                type="text"
                placeholder={
                  currentStep === "name"
                    ? "Enter your name..."
                    : currentStep === "email"
                      ? "Enter your email..."
                      : currentStep === "phone"
                        ? "Enter your phone number..."
                        : currentStep === "requirements"
                          ? "Tell us about your requirements..."
                          : currentStep === "confirmation"
                            ? "Yes or no"
                            : "Type your message..."
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow"
                disabled={isSubmitting}
              />
              <Button type="submit" size="icon" disabled={inputValue.trim() === "" || isSubmitting}>
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
          {currentStep !== "intro" && (
            <div className="px-4 pb-3 flex justify-center gap-2">
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  currentStep === "name" ||
                    currentStep === "email" ||
                    currentStep === "phone" ||
                    currentStep === "requirements" ||
                    currentStep === "confirmation" ||
                    currentStep === "success"
                    ? "bg-primary"
                    : "bg-muted",
                )}
              />
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  currentStep === "email" ||
                    currentStep === "phone" ||
                    currentStep === "requirements" ||
                    currentStep === "confirmation" ||
                    currentStep === "success"
                    ? "bg-primary"
                    : "bg-muted",
                )}
              />
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  currentStep === "phone" ||
                    currentStep === "requirements" ||
                    currentStep === "confirmation" ||
                    currentStep === "success"
                    ? "bg-primary"
                    : "bg-muted",
                )}
              />
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  currentStep === "requirements" || currentStep === "confirmation" || currentStep === "success"
                    ? "bg-primary"
                    : "bg-muted",
                )}
              />
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  currentStep === "confirmation" || currentStep === "success" ? "bg-primary" : "bg-muted",
                )}
              />
              <div className={cn("h-1.5 w-1.5 rounded-full", currentStep === "success" ? "bg-primary" : "bg-muted")} />
            </div>
          )}
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 shadow-lg flex items-center justify-center bg-primary hover:bg-primary/90 transition-all duration-200"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      )}
    </div>
  )
}

export default EnhancedChatbot

