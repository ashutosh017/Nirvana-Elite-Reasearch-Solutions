"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactForm } from "./contact-form"

export function Footer() {
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
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-gradient-to-b from-background to-primary/30 text-foreground relative overflow-hidden">
      {/* 3D animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container px-4 py-12 md:px-6 md:py-16 relative z-10">
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Nirvana Elite
            </h3>
            <p className="text-muted-foreground">
              Expert assistance for PhD students with synopsis writing, research methodology, and academic assignments.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <ContactForm buttonText="Reach Out" />
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="hover:text-primary transition-colors">
                  PhD Synopsis Writing
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="hover:text-primary transition-colors">
                  Literature Review
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="hover:text-primary transition-colors">
                  Research Methodology
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="hover:text-primary transition-colors">
                  Academic Assignments
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <motion.li className="flex items-start gap-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <span>123 Academic Avenue, Research Park, Knowledge City</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>info@nirvanaelite.com</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MessageSquare className="h-5 w-5 text-primary" />
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleWhatsAppClick()
                  }}
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp Chat
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-primary/20 pt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Nirvana Elite Research Solutions. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

