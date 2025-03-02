'use client'
import Image from "next/image";
import { redirect } from "next/navigation";
import { FC } from "react";

const AboutPage: FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 text-black py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          About <span className="text-gray-700">Nirvana Elite Research Solutions</span>
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Where Research Excellence Meets Innovation
        </p>
      </div>

      {/* Content Container */}
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-5xl mx-auto text-gray-800 transition-all duration-300">
        <p className="text-lg leading-relaxed mb-6">
          <strong>Nirvana Elite Research Solutions</strong> is more than just a research consultancy. We are your dedicated partner in academic and professional research, providing high-quality services to scholars, researchers, and professionals worldwide.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Our mission is to bridge the gap between complex research challenges and seamless solutions. With our unwavering commitment to excellence, precision, and integrity, we help scholars achieve their academic and research goals effortlessly.
        </p>

        {/* Key Features Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Unmatched Expertise:</strong> Our team of seasoned researchers and subject-matter experts ensures high-quality, impactful research solutions.</li>
            <li><strong>Premium & Custom-Tailored Solutions:</strong> Every project meets international research standards with originality and precision.</li>
            <li><strong>Confidentiality & Timely Delivery:</strong> We ensure 100% confidentiality and always meet deadlines, regardless of project complexity.</li>
            <li><strong>End-to-End Assistance:</strong> From research proposals to final dissertations and publications, we guide you every step of the way.</li>
          </ul>
        </div>

        {/* Image Gallery Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-black mb-6 text-center">Our Work in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image height={100} width={500} src="/images/research1.png" alt="Research Collaboration" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            <Image height={100} width={500} src="/images/research2.png" alt="Data Analysis" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            <Image height={100} width={500} src="/images/research3.png" alt="Team Discussion" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-gray-800">
            At Nirvana Elite, we transform research challenges into opportunities. Let’s elevate your academic journey together.
          </p>
          <button onClick={()=>{
            redirect("/contact")
          }} className="mt-6 px-6 py-3 bg-black text-white rounded-lg shadow-md text-lg font-semibold hover:bg-gray-800 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
