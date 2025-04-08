"use client"

import { useRef } from "react"
import {
  BookOpen,
  FileText,
  GraduationCap,
  PenTool,
  MessageSquare,
  FileEdit,
  BookText,
  FileSpreadsheet,
} from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactForm } from "./contact-form"
import { phoneNumber } from "../../_config"

export function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <FileEdit className="h-10 w-10 text-primary" />,
      title: "Research Proposal/Synopsis",
      description:
        "Expert assistance in crafting comprehensive and well-structured research proposals and PhD synopses that meet academic standards.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Literature Review",
      description:
        "Thorough analysis and synthesis of existing research to establish the foundation for your PhD research.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Research Methodology",
      description: "Guidance on selecting appropriate research methods and designing effective research frameworks.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Academic Assignments",
      description:
        "Professional assistance with complex academic assignments, ensuring high-quality and original content.",
    },
    {
      icon: <BookText className="h-10 w-10 text-primary" />,
      title: "Thesis Writing",
      description:
        "Comprehensive support for structuring, writing, and refining your thesis to meet the highest academic standards.",
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
      title: "Dissertation Writing",
      description: "Expert guidance throughout the dissertation process, from conceptualization to final submission.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Research Paper Writing",
      description:
        "Professional assistance with crafting research papers for journals, conferences, and academic publications.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Editing & Proofreading",
      description:
        "Meticulous editing and proofreading services to ensure your academic work is polished and error-free.",
    },
  ]

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const message = "Hello! I'm interested in your PhD services."
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden"
    >
      {/* 3D animated background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: -1,
            }}
            animate={{
              z: [Math.random() * -100, Math.random() * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
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
              Our Services
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive support for PhD students at every stage of their academic journey
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-8 sm:py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center space-y-4 rounded-lg border p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm hover:scale-105 transform-gpu"
              onClick={() => document.getElementById("contact-form")?.click()}
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className="p-3 rounded-full bg-primary/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-center">{service.title}</h3>
              <p className="text-muted-foreground text-center">{service.description}</p>
              <div className="mt-auto pt-4">
                <ContactForm buttonText="Get Started" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            Discuss Your Requirements on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

