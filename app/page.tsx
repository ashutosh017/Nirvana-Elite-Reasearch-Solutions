import Link from "next/link"
import { Briefcase, GraduationCap, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">PhD Assist</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#services" className="text-gray-600 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0 bg-repeat"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            ></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl font-bold mb-4">Expert Assistance for PhD Students</h1>
            <p className="text-xl mb-8">We help you excel in your doctoral journey with our specialized services</p>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<FileText className="h-12 w-12 text-primary" />}
                title="Synopsis Writing"
                description="Expert guidance in crafting compelling research synopses that set the foundation for your thesis."
              />
              <ServiceCard
                icon={<Briefcase className="h-12 w-12 text-primary" />}
                title="Thesis Support"
                description="Comprehensive assistance throughout your thesis writing process, ensuring quality and coherence."
              />
              <ServiceCard
                icon={<GraduationCap className="h-12 w-12 text-primary" />}
                title="Academic Consulting"
                description="Personalized academic advice to help you navigate your PhD journey successfully."
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="w-full h-[300px] bg-gray-300 rounded-lg shadow-lg flex items-center justify-center text-gray-500">
                  About PhD Assist Image
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-4">About PhD Assist</h2>
                <p className="text-gray-600 mb-4">
                  At PhD Assist, we understand the challenges that doctoral students face. Our team of experienced
                  academics and researchers is dedicated to providing high-quality assistance to help you succeed in
                  your PhD journey.
                </p>
                <p className="text-gray-600 mb-4">
                  With our tailored services, we aim to support you in every aspect of your research, from crafting your
                  initial synopsis to completing your final thesis.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input type="tel" placeholder="Your Phone Number" />
                <Input type="text" placeholder="Subject" />
                <Textarea placeholder="Your Message" className="h-32" />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8" />
                <span className="text-xl font-bold">PhD Assist</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-secondary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-secondary">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">© {new Date().getFullYear()} PhD Assist. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

