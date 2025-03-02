import React from "react";

import Footer from "../../_components/Footer";
import Header2 from "../../_components/Header2";

export default function otherRoutesLayout({
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <>

    <Header2/>
    {children}
    <Footer/>
    </>
}