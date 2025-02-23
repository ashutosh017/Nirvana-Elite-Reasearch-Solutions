'use client'

import {
    ShieldCheck,
    ClipboardCheck,
    GraduationCap,
    TrendingUp,
  } from "lucide-react";
  
  const WhyChooseUs = () => {
    const features = [
      {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: "Trusted Expertise",
        description:
          "Our team of PhD holders and experienced researchers provide top-notch academic support tailored to your needs.",
      },
      {
        icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
        title: "100% Originality Guaranteed",
        description:
          "We ensure plagiarism-free content with rigorous checks using advanced tools like Turnitin and Grammarly.",
      },
      {
        icon: <GraduationCap className="h-10 w-10 text-primary" />,
        title: "Comprehensive Guidance",
        description:
          "From proposal writing to final submission, we guide you through every step of your research journey.",
      },
      {
        icon: <TrendingUp className="h-10 w-10 text-primary" />,
        title: "High Success Rate",
        description:
          "Our proven track record of successful PhD completions and journal publications speaks for itself.",
      },
    ];
  
    return (
      <section id="why-choose-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We are dedicated to helping PhD students excel in their academic
            journey with unparalleled support and expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  