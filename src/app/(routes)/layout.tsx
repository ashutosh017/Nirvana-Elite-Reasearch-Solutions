import React from "react";
import WhatsappChat from "../_components/WhatsappChat";
import Chatbot from "../_components/Chatbot";


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
  {children}
  <Chatbot/>
  <WhatsappChat/>
  </>;
}
