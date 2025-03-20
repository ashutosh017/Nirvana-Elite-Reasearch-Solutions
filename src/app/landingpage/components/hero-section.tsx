"use client"

import type React from "react"
// import Image from "next/image"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { ContactForm } from "./contact-form"

export function HeroSection() {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "1234567890"
    const message = "Hello! I'm interested in PhD assistance services."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="relative bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 md:py-28 overflow-hidden">
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
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
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
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ContactForm buttonText="Get Expert Help" />
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
            <div className="relative w-[400px] h-[400px] perspective-[1000px]">
              {/* <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{
                  duration: 50,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                }}
              >
                <Image
                  src="/images/bg4.png"
                  width={400}
                  height={400}
                  alt="PhD Research"
                  className="rounded-2xl object-center"
                  priority
                />
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        onClick={() => document.getElementById("contact-form")?.click()}
      >
        {/* This div captures clicks anywhere on the hero section */}
      </div>
    </section>
  )
}

const Button = ({
  children,
  variant,
  onClick,
  className = "",
}: {
  children: React.ReactNode
  variant?: "outline" | "default" | "secondary"
  onClick?: () => void
  className?: string
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
        variant === "outline"
          ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground "
          : variant === "secondary"
            ? "bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 "
            : "bg-primary text-primary-foreground shadow hover:bg-primary/90 "
      }${className}`}
    >
      {children}
    </button>
  )
}

