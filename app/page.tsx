import Header from "@/components/app-sub-components/Header";
import Footer from "@/components/app-sub-components/Footer";
import HeroSection from "@/components/app-sub-components/HeroSection";
import WhyChooseUs from "@/components/app-sub-components/WhyChooseUs";
import Services from "@/components/app-sub-components/Services";
import About from "@/components/app-sub-components/About";
import ContactUs from "@/components/app-sub-components/ContactUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Services />
        <About />
        <WhyChooseUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
