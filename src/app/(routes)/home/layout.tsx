import React from "react";
import Footer from "../../_components/Footer";
import Header from "../../_components/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
  <Header/>
  {children}
  <Footer/>
  </>;
}
