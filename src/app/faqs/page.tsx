'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "What services do you offer?", answer: "We provide assistance for PG students with their theses, viva, projects, and more." },
  { question: "How can I contact you?", answer: "You can reach us through our contact form or email us at support@nirvaanelite.com." },
  { question: "Do you offer one-on-one support?", answer: "Yes, we provide personalized support based on your requirements." },
  { question: "What subjects do you cover?", answer: "We cover a wide range of subjects including engineering, management, sciences, and humanities." },
  { question: "Can you help with research paper publishing?", answer: "Yes, we assist in research paper writing, formatting, and submission to reputed journals." },
  { question: "Do you provide plagiarism checks?", answer: "Yes, we ensure that all documents are plagiarism-free using industry-standard tools." },
  { question: "What are your pricing plans?", answer: "Our pricing varies based on the complexity and length of the project. Contact us for a custom quote." }
];

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-4 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>
            {openIndex === index && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-700"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
