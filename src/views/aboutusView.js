import React from "react";
import Navbar from "../components/nav/navbar";
import HeroSection from "../components/hero/herosection";
import AboutUs from "../components/aboutUs/aboutUs";

function AboutUsView() {
  return <Navbar AboutUs={AboutUs} Hero={HeroSection} />;
}

export default AboutUsView;
