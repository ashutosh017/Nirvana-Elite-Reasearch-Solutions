"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ContactForm } from "./contact-form"

export function FaqSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const faqs = [
    {
      question: "What services does Nirvana Elite Research offer?",
      answer:
        "We provide comprehensive academic support, including thesis writing, dissertation assistance, research proposal development, and editing services.",
    },
    {
      question: "Who can benefit from your services?",
      answer:
        "Our services cater to students, researchers, and professionals seeking guidance in academic writing and research.",
    },
    {
      question: "Do you offer customized research solutions?",
      answer: "Yes, we tailor our services to meet your specific academic goals and requirements.",
    },
    {
      question: "How do I get started with your service?",
      answer: "Simply reach out through our website or contact our support team to discuss your project needs.",
    },
    {
      question: "What is the typical turnaround time for a project?",
      answer:
        "The timeline varies depending on the complexity and scope of the project. We aim for timely delivery without compromising quality.",
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. We maintain strict confidentiality and data privacy for all our clients.",
    },
    {
      question: "Do you provide plagiarism-free content?",
      answer: "Yes, all our work is original and thoroughly checked for plagiarism before delivery.",
    },
    {
      question: "Can I request revisions?",
      answer: "Yes, we offer revisions to ensure your complete satisfaction with the final output.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept multiple payment options, including credit cards, bank transfers, and digital wallets.",
    },
    {
      question: "Do you assist with specific citation styles?",
      answer: "Yes, we are proficient in APA, MLA, Chicago, Harvard, and other citation formats.",
    },
    {
      question: "Do you offer support after project delivery?",
      answer: "Yes, our team is available for post-delivery support to address any queries or modifications.",
    },
    {
      question: "How do I track the progress of my project?",
      answer: "We provide regular updates and maintain open communication to keep you informed throughout the process.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="faq"
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
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Find answers to common questions about our PhD research assistance services
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqs.slice(0, 6).map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {faqs.slice(6, 12).map((faq, index) => (
              <FaqItem key={index + 6} question={faq.question} answer={faq.answer} index={index + 6} />
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-6">Still have questions? We&apos;re here to help.</p>
          <div className="flex justify-center">
            <ContactForm buttonText="Ask Your Question" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false) // Open the 4th item by default (How do I get started)

  return (
    <motion.div
      className="border border-primary/10 rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -2, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
    >
      <button
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium">{question}</span>
        <span className="ml-2 flex-shrink-0 text-primary">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 pt-0 text-muted-foreground border-t border-primary/10">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

