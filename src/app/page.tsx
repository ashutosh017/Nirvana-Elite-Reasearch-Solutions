import Testimonials from "./_components/Testimonials";
import HeroSection from "./_components/HeroSection";
import Header from "./_components/Header";
import About from "./_components/About";
import WhyChooseUs from "./_components/WhyChooseUs";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";
import Services from "./_components/Services";
import WhatsappChat from "./_components/WhatsappChat";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
      <WhatsappChat /> {/* Add the WhatsApp Chat Button */}
    </div>
  );
}
