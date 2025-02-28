"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Animation */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/pexels-nietjuhart-796602.png"
              alt="About Us"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Animation */}
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              At Nirvaana Elite Research Solutions, we understand the challenges
              that doctoral students face. Our team of experienced academics and
              researchers is dedicated to providing high-quality assistance to
              help you succeed in your PhD journey.
            </motion.p>
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              With our tailored services, we aim to support you in every aspect
              of your research, from crafting your initial synopsis to
              completing your final thesis.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button
                variant="outline"
                className="relative overflow-hidden border-primary text-primary transition-all duration-300 hover:text-white group"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-primary transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
