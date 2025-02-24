import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side Message - Visible on PC */}
          <div className="hidden md:block">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Let's Connect!
            </h3>
            <p className="text-gray-600">
              We’re here to help you with any questions or inquiries. 
              Whether it's about our services or just to say hello – we’d love to hear from you!
            </p>
            <p className="mt-4 text-gray-600">
              Fill out the form and we’ll get back to you as soon as possible.
            </p>
          </div>
          {/* Right Side Form */}
          <div className="max-w-md w-full mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
              </div>
              <Input type="tel" placeholder="Your Phone Number" />
              <Input type="text" placeholder="Subject" />
              <Textarea placeholder="Your Message" className="h-32" />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
