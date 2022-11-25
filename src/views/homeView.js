import Cards from "../components/cards/cards";
import ContactUs from "../components/contact/contact";
import HeroSection from "../components/hero/herosection";
import React from "react";
import Navbar from "../components/nav/navbar";

function Home() {
  return (
    <>
      <Navbar Hero={HeroSection} Card={Cards} Contact={ContactUs} />
    </>
  );
}

export default Home;
