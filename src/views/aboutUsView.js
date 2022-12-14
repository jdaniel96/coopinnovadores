import React from "react";
import Navbar from "../components/nav/navbar";
import HeroSection from "../components/hero/herosection";
import AboutUs from "../components/aboutUs/aboutUs";

function aboutUsView() {
  return (
    <>
    <Navbar Hero={HeroSection}/>
    <AboutUs/>
    </>
  );
}

export default aboutUsView;