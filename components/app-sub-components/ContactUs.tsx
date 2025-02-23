import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const ContactUs = ()=>{
    return   <section id="contact" className="py-20 bg-white">
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
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  </section>
}

export default ContactUs