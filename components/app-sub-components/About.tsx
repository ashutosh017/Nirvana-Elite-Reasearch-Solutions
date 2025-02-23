import Image from "next/image"
import { Button } from "../ui/button"

const About = ()=>{
    return   <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/pexels-nietjuhart-796602.png"
            alt="About Us"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-gray-600 mb-4">
            At Nirvaan Elite Research Solutions, we understand the challenges that doctoral
            students face. Our team of experienced academics and
            researchers is dedicated to providing high-quality assistance
            to help you succeed in your PhD journey.
          </p>
          <p className="text-gray-600 mb-4">
            With our tailored services, we aim to support you in every
            aspect of your research, from crafting your initial synopsis
            to completing your final thesis.
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </section>
}

export default About