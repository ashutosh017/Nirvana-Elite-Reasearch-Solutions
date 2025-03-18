'use client'
import React from "react";
import { MessageCircle } from "lucide-react";
import { phoneNumber } from "../_config";

const WhatsappChat = () => {

  const openWhatsApp = () => {
    console.log(phoneNumber)
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 cursor-pointer transition-colors"
    >
      <MessageCircle size={20} />
    </div>
  );
};

export default WhatsappChat;
