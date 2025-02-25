"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, ThumbsUp, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Award className="h-12 w-12 text-primary" />,
    title: "Expert Guidance",
    description:
      "Get mentorship from PhD experts who understand your research challenges.",
  },
  {
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    title: "Comprehensive Support",
    description:
      "From synopsis writing to publication, we cover every step of your journey.",
  },
  {
    icon: <ThumbsUp className="h-12 w-12 text-primary" />,
    title: "High Approval Rates",
    description:
      "Our strategic approach ensures your research gets approved faster.",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    title: "Confidential & Secure",
    description:
      "Your research ideas and data are safe with our strict confidentiality policy.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are dedicated to helping PhD students excel in their academic
          journey with unparalleled support and expertise.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white cursor-pointer p-6 rounded-2xl shadow-md text-left transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
