import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import Services from "@/app/components/Services";
import About from "@/app/components/About";
import ContactUs from "@/app/components/ContactUs";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials/>
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
