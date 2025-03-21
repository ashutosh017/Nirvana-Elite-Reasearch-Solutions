import { AboutSection } from "./components/about-section";
import { BookAppointmentSection } from "./components/book-appointment-section";
import { FaqSection } from "./components/faq-section";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { PaymentMethodsSection } from "./components/payment-methods-section";
import { ServicesSection } from "./components/services-section";
import { TestimonialsSection } from "./components/testimonials-section";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <BookAppointmentSection/>
      <PaymentMethodsSection/>
      <FaqSection/>
      <Footer />
    </main>
  )
}

