"use client";
import { useState, useEffect } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";

export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(
      !name.trim() || !review.trim() || rating === 0 || (!email && !phone)
    );
  }, [name, review, rating, email, phone]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);

    try {
      const requestData: Record<string, string|number|Array<string>> = {
        name,
        phone,
        rating,
        review,
      };

      // Include socialLinks only if socialLink is provided
      if (socialLink.trim()) {
        requestData.socialLinks = [socialLink];
      }
      if(email.trim()){
        requestData.email = email
      }
      console.log(name, email, phone, [socialLink], rating, review);
      await axios.post(`/api/v1/review`, requestData);
      toast.success("Review submitted!");
      // Clear form after submission
      setName("");
      setEmail("");
      setPhone("");
      setSocialLink("");
      setRating(0);
      setReview("");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!" );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-gray-50 text-black py-16 px-6 md:px-12 lg:px-24"
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        transition={Bounce}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Write a Review
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <label className="block text-lg font-medium">Your Rating</label>
            <div className="flex space-x-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </motion.div>

          {/* Input Fields */}
          {[
            {
              placeholder: "Your Name",
              value: name,
              setValue: setName,
              required: true,
            },
            { placeholder: "Your Email", value: email, setValue: setEmail },
            {
              placeholder: "Your Phone Number",
              value: phone,
              setValue: setPhone,
            },
            {
              placeholder: "Your Social Media URL (Optional)",
              value: socialLink,
              setValue: setSocialLink,
            },
          ].map((input, index) => (
            <motion.input
              key={index}
              type={
                input.placeholder.includes("Email")
                  ? "email"
                  : input.placeholder.includes("Phone")
                  ? "tel"
                  : "text"
              }
              placeholder={input.placeholder}
              value={input.value}
              onChange={(e) => input.setValue(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required={input.required || false}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
            />
          ))}

          {/* Review Textarea */}
          <motion.textarea
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows={5}
            required
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          ></motion.textarea>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className={`w-full p-3 rounded-lg transition ${
              isDisabled
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
            whileTap={!isDisabled ? { scale: 0.95 } : {}}
            transition={{ duration: 0.2 }}
            disabled={isDisabled}
          >
            Submit Review
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
