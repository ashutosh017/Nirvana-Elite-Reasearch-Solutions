"use client"

import { useRef } from "react"
import { Star, MessageSquare } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactForm } from "./contact-form"

export function TestimonialsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "PhD in Psychology",
      content:
        "Nirvana Elite Research Solutions provided exceptional support during my PhD journey. Their expertise in research methodology was invaluable, and they helped me craft a compelling synopsis that impressed my supervisors.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "PhD Candidate, Economics",
      content:
        "I was struggling with my literature review until I found Nirvana Elite. Their team helped me organize my research and develop a coherent framework. The quality of their work exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "PhD in Computer Science",
      content:
        "The assistance I received with my research methodology was outstanding. The team at Nirvana Elite understood my research objectives perfectly and provided tailored guidance that significantly improved my work.",
      rating: 4,
    },
  ]

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "1234567890"
    const message = "Hello! I'd like to hear more about your PhD services success stories."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden"
    >
      {/* 3D animated background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${Math.random() * 500 + 300}px`,
              height: `${Math.random() * 500 + 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: -1,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.1, 1],
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
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Success Stories
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Hear from PhD students who achieved academic excellence with our support
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col justify-between rounded-lg border p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm transform-gpu"
              onClick={() => document.getElementById("contact-form")?.click()}
              variants={item}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div>
                <motion.div
                  className="flex mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                >
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: -30, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className="h-5 w-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                </motion.div>
                <p className="mb-4 text-muted-foreground">&quot;{testimonial.content}&quote;</p>
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ContactForm buttonText="Join Our Success Stories" />
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            Ask About Results
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

