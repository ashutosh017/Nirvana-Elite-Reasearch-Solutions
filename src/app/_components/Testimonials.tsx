"use client";

import { Quote } from "lucide-react";
import {  motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Aisha Verma",
    role: "PhD in Computer Science",
    feedback:
      "Nirvaan Elite Research Solutions played a crucial role in refining my research proposal. Their expert guidance helped me get instant approval, and their support throughout my thesis writing was invaluable!",
    image: "/images/testimonial1.png",
  },
  {
    name: "Rahul Mehta",
    role: "PhD Scholar in Mechanical Engineering",
    feedback:
      "The data analysis team helped me process complex datasets using Python and MATLAB, leading to insightful results that strengthened my thesis. Highly recommended!",
    image: "/images/testimonial2.png",
  },
  {
    name: "Prof. Swati Sharma",
    role: "Published Researcher, IEEE & Elsevier",
    feedback:
      "I struggled with journal rejections until I found Nirvaan Elite. Their expert research editing and journal publication services helped me publish in IEEE within weeks!",
    image: "/images/testimonial3.png",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        className="text-3xl  font-bold mb-12 text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white cursor-pointer p-6 rounded-2xl shadow-lg text-left transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            whileHover={{ 
                scale: 1.05, 
                transition: { 
                  duration: 0.2,   // Snappy hover-in effect
                  ease: "easeOut" 
                } 
              }}
              whileTap={{ scale: 0.98 }}
            
          >
            <Quote className="h-10 w-10 text-indigo-600 mb-4" />
            <p className="text-gray-700 mb-4 italic">&quot;{testimonial.feedback}&quot;</p>
            <div className="flex items-center space-x-4">
              <Image
              width={100}
              height={100}

                src={testimonial.image}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Testimonials;
