import { AboutSection } from "./components/about-section";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { TestimonialsSection } from "./components/testimonials-section";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}

