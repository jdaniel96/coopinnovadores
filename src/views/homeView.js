import Cards from "../components/cards/cards";
import ContactUs from "../components/contact/contact";
import HeroSection from "../components/hero/herosection";
import React from "react";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ContactUs />
    </>
  );
}

export default Home;
