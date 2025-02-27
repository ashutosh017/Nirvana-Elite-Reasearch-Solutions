import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import HeroSection from "@/app/_components/HeroSection";
import WhyChooseUs from "@/app/_components/WhyChooseUs";
import Services from "@/app/_components/Services";
import About from "@/app/_components/About";
import ContactUs from "@/app/_components/ContactUs";
import Testimonials from "./_components/Testimonials";

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
