'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const images = [
  "/images/bg1.png",
  "/images/bg2.png",
  "/images/bg3.png",
  "/images/bg4.png",
  "/images/bg5.png",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20 flex items-center justify-center relative overflow-hidden h-screen">
      <div className="absolute inset-0 ">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ease-in ${
              index === currentIndex ? "opacity-20" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-0 bg-repeat">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center  relative z-10">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 ">
          Expert Assistance for PhD Students
        </h1>
        <p className="text-sm md:text-xl mb-8  px-6">
          We help you excel in your doctoral journey with our specialized
          services
        </p>
        <Button
          asChild
          className="bg-secondary text-sm md:text-lg px-2 py-1 md:px-4 md:py-5  hover:bg-secondary/90 text-black"
        >
          <Link href="#contact">Get Started</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
