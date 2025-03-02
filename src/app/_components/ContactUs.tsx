"use client";
import { FormEvent, useRef, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../_config";

// interface FormDataSchema {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
//   service: string;
// }

const ContactUs = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  // const [formData,setFormData] = useState<FormDataSchema>()
  const [isDisabled,setIsDisabled] = useState<boolean>(true)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit called");
    e.preventDefault();
    try {
      if (!nameRef.current?.value || !phoneRef.current?.value) {
        toast.error("You cannot submit empty form.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }
      const name = nameRef.current.value;
      const phone = phoneRef.current.value;
      const email = emailRef.current?.value;
      const service = serviceRef.current?.value;
      const message = messageRef.current?.value;
      if (nameRef.current) nameRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (serviceRef.current) serviceRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      setIsDisabled(true)
      const res = await axios.post(`${BACKEND_URL}/api/v1/contacts`, {
        name,
        email,
        phone,
        service,
        message,
      });

      console.log("res data: ", res.data);
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Let&apos;s Connect!
            </h3>
            <p className="text-gray-600">
              We’re here to help you with any questions or inquiries. Whether
              it&apos;s about our services or just to say hello – we’d love to
              hear from you!
            </p>
            <p className="mt-4 text-gray-600">
              Fill out the form and we’ll get back to you as soon as possible.
            </p>
          </motion.div>
          <motion.div
            className="max-w-md w-full mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Input ref={nameRef} onChange={()=>{setIsDisabled(false)}} type="text" placeholder="Your Name" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Input ref={emailRef} type="email" placeholder="Your Email" />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Input
                  ref={phoneRef}
                  type="tel"
                  placeholder="Your Phone Number"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Input ref={serviceRef} type="text" placeholder="Subject" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Textarea
                  ref={messageRef}
                  placeholder="Your Message"
                  className="h-32"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  className=" w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isDisabled}
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
