import About from "../_components/About";
import ContactUs from "../_components/ContactUs";
import HeroSection from "../_components/HeroSection";
import Services from "../_components/Services";
import Testimonials from "../_components/Testimonials";
import WhyChooseUs from "../_components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <ContactUs/>
      </main>
    </div>
  );
}
