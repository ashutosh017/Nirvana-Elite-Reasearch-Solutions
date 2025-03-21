"use client"

import type React from "react"
import { motion } from "framer-motion"
import { MessageSquare, CheckCircle, Phone } from "lucide-react"
import { useState } from "react"
import { phoneNumber } from "../../_config"

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phone:"",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")



  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const message = "Hello! I'm interested in PhD assistance services."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleCallClick = () => {
    // Replace with your actual phone number
    window.location.href =`tel:+${phoneNumber!}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prevent submission if already submitting
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/api/v1/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      // Show success message
      setSubmitSuccess(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone:"",
        service: "",
        message: "",
      })
    } catch (error) {
      console.log(error)
      setSubmitError("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 md:py-28 overflow-hidden">
      {/* Call and WhatsApp buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={handleCallClick}
          className="h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </Button>
        <Button
          onClick={handleWhatsAppClick}
          className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Nirvana Elite Research Solutions
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Expert assistance for PhD students with synopsis writing, research methodology, and academic
                assignments.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                variant="outline"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="border-primary/20 hover:bg-primary/10"
              >
                Explore Services
              </Button>
              <Button
                variant="secondary"
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-full max-w-[500px] bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10">
              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="rounded-full bg-green-100 p-3 text-green-600 mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your request has been successfully submitted. Our team will contact you shortly.
                  </p>
                  <Button onClick={() => setSubmitSuccess(false)} className="bg-primary hover:bg-primary/90">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-4 text-center">Get Expert PhD Assistance</h3>
                  <div className="space-y-4">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 1234123412"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service Required
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          <option value="Research Proposal/Synopsis">Research Proposal/Synopsis</option>
                          <option value="Thesis Writing">Thesis Writing</option>
                          <option value="Dissertation Writing">Dissertation Writing</option>
                          <option value="Research Paper Writing">Research Paper Writing</option>
                          <option value="Literature Review">Literature Review</option>
                          <option value="Research Methodology">Research Methodology</option>
                          <option value="Academic Assignments">Academic Assignments</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements..."
                          rows={3}
                          required
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[80px]"
                        />
                      </div>

                      {submitError && (
                        <div className="text-sm text-red-500 p-2 bg-red-50 dark:bg-red-950/30 rounded border border-red-200 dark:border-red-800">
                          {submitError}
                        </div>
                      )}

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our{" "}
                      <a href="#" className="underline">
                        Terms & Conditions
                      </a>
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Button = ({
  children,
  variant,
  onClick,
  className = "",
  type,
  disabled,
}: {
  children: React.ReactNode
  variant?: "outline" | "default" | "secondary"
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
        variant === "outline"
          ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground "
          : variant === "secondary"
            ? "bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 "
            : "bg-primary text-primary-foreground shadow hover:bg-primary/90 "
      }${disabled ? " opacity-50 cursor-not-allowed " : ""}${className}`}
    >
      {children}
    </button>
  )
}

