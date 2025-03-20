"use client"

import { useRef } from "react"
import Image from "next/image"
import { CheckCircle, MessageSquare } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactForm } from "./contact-form"

export function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const benefits = [
    "PhD-qualified research experts",
    "Personalized academic support",
    "Strict adherence to academic integrity",
    "Timely delivery of all projects",
    "Confidential and secure service",
    "Unlimited revisions and support",
  ]

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "1234567890"
    const message = "Hello! I'd like to know more about your PhD services."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* 3D animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-background/0"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/5"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 30 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-[500px] h-[350px]  transform-gpu">
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/about.png"
                  width={500}
                  height={500}
                  alt="About Nirvana Elite Research"
                  className="rounded-2xl object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground md:text-lg">
              At Nirvana Elite Research Solutions, we understand the challenges faced by PhD students. Our team of
              experienced researchers and academics is dedicated to providing high-quality assistance that helps you
              excel in your academic journey.
            </p>
            <motion.ul
              className="grid gap-3 md:grid-cols-2"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {benefits.map((benefit, index) => (
                <motion.li key={index} className="flex items-center gap-2" variants={item}>
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className="pt-4 flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ContactForm buttonText="Schedule a Call" />
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

