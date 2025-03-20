"use client"

import { useState, useEffect } from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Show the WhatsApp button after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "1234567890"
    const message = "Hello! I'm interested in PhD assistance services."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-lg bg-card shadow-xl border border-border overflow-hidden"
          >
            <div className="bg-green-500 p-4 flex justify-between items-center">
              <h3 className="font-bold text-white">Chat with us on WhatsApp</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full bg-green-600 hover:bg-green-700 text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/10">
              <p className="text-sm mb-4">
                Hello! Need assistance with your PhD research? Our experts are ready to help.
              </p>
              <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 text-white">
                Start Chat
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

