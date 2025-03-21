"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CreditCard, Landmark, Wallet, Shield } from "lucide-react"
import Image from "next/image"

export function PaymentMethodsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const paymentMethods = [
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Credit & Debit Cards",
      description: "Securely pay with Visa, Mastercard, American Express, and other major cards.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-primary" />,
      title: "Digital Wallets",
      description: "Convenient payments via PayPal, Google Pay, Apple Pay, and other digital wallets.",
    },
    {
      icon: <Landmark className="h-10 w-10 text-primary" />,
      title: "Bank Transfers",
      description: "Direct bank transfers for secure and traceable transactions.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Payments",
      description: "All transactions are encrypted and processed through secure payment gateways.",
    },
  ]

  const paymentLogos = [
    { name: "Visa", src: "/images/visa.png?height=40&width=60" },
    { name: "Mastercard", src: "/images/master-card.png?height=40&width=60" },
    { name: "American Express", src: "/images/american-express.png?height=40&width=60" },
    { name: "PayPal", src: "/images/paypal.png?height=40&width=60" },
    { name: "Google Pay", src: "/images/google-pay.png?height=40&width=60" },
    { name: "Apple Pay", src: "/images/apple-pay.png?height=40&width=60" },
  ]

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="payment-methods"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, rgba(0, 0, 0, 0) 70%)",
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
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Payment Methods
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
            We offer multiple secure payment options for your convenience
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg flex flex-col items-center text-center "
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="p-3 rounded-full bg-primary/10 mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-muted-foreground">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">Accepted Payment Methods</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {paymentLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-200 rounded-lg p-3 shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={60}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            All payments are processed securely. We do not store your payment information.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

