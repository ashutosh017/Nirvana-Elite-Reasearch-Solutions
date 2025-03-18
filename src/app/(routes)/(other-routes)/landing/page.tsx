import About from "@/src/app/_components/About";
import ContactUs from "@/src/app/_components/ContactUs";
import Services from "@/src/app/_components/Services";
import Testimonials from "@/src/app/_components/Testimonials";
import WhyChooseUs from "@/src/app/_components/WhyChooseUs";


export default function Landing(){
    return  <div className="flex flex-col scroll-smooth min-h-screen">
    <main className="flex-grow">
      <ContactUs/>
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
    </main>
  </div>
}