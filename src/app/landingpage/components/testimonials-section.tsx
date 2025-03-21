"use client"

import { useRef, useState, useEffect } from "react"
import { Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactForm } from "./contact-form"

export function TestimonialsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
    {
      name: "Dr. James Wilson",
      role: "PhD in Business Management",
      content:
        "Working with Nirvana Elite was a game-changer for my dissertation. Their attention to detail and deep understanding of research methodologies helped me complete my work ahead of schedule.",
      rating: 5,
    },
    {
      name: "Sophia Rodriguez",
      role: "PhD Student, Sociology",
      content:
        "I highly recommend Nirvana Elite to any PhD student feeling overwhelmed. Their structured approach and expert guidance made the complex process of research design much more manageable.",
      rating: 5,
    },
  ]

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "1234567890"
    const message = "Hello! I'd like to hear more about your PhD services success stories."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    if (!isMounted) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isMounted, testimonials.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
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

        {/* Testimonial Slider */}
        <div className="mx-auto max-w-4xl py-12 relative">
          <div className="relative overflow-hidden h-[300px] sm:h-[250px] md:h-[220px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 shadow-lg">
                  <div className="flex mb-4">
                    {Array(testimonials[currentIndex].rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                  </div>
                  <p className="mb-4 text-muted-foreground italic">&quot;{testimonials[currentIndex].content}&quot;</p>
                  <div>
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-4" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center mt-8 gap-4"
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

