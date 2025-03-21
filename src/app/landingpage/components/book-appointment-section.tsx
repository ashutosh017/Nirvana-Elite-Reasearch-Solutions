"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Clock, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "./contact-form"
import { phoneNumber } from "../../_config"

export function BookAppointmentSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const message = "Hello! I'd like to schedule an appointment for PhD assistance."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleCallClick = () => {
    // Replace with your actual phone number
    window.location.href = phoneNumber!
  }

  return (
    <section
      id="book-appointment"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Book Your Appointment
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Schedule a consultation with our expert team to discuss your research needs and get personalized
              assistance
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">
                    Choose a time that works best for you. We offer appointments throughout the week.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">30-Minute Consultation</h3>
                  <p className="text-muted-foreground">
                    Our initial consultation helps us understand your needs and provide tailored solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Connect with PhD-qualified experts who understand your academic challenges.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <ContactForm buttonText="Schedule Consultation" />
                <Button
                  onClick={handleCallClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Call Us Directly
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat With Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4">Available Time Slots</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-primary/20 rounded-lg p-3 text-center hover:bg-primary/10 cursor-pointer transition-colors">
                    <p className="font-medium">Monday</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="border border-primary/20 rounded-lg p-3 text-center hover:bg-primary/10 cursor-pointer transition-colors">
                    <p className="font-medium">Tuesday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="border border-primary/20 rounded-lg p-3 text-center hover:bg-primary/10 cursor-pointer transition-colors">
                    <p className="font-medium">Wednesday</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - 6:00 PM</p>
                  </div>
                  <div className="border border-primary/20 rounded-lg p-3 text-center hover:bg-primary/10 cursor-pointer transition-colors">
                    <p className="font-medium">Thursday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="border border-primary/20 rounded-lg p-3 text-center hover:bg-primary/10 cursor-pointer transition-colors">
                    <p className="font-medium">Friday</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="border border-primary/20 rounded-lg p-3 text-center hover:bg-primary/10 cursor-pointer transition-colors">
                    <p className="font-medium">Saturday</p>
                    <p className="text-sm text-muted-foreground">By Appointment</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  All times are in Eastern Standard Time (EST)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

