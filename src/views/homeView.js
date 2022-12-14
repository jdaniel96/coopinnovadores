// import Cards from "../components/cards/cards";
// import ContactUs from "../components/contact/contact";
import HeroSection from "../components/hero/herosection";
import React from "react";
import Navbar from "../components/nav/navbar";
import Form from "../components/form/form";
import Gallery from "../components/gallery/gallery";
import WhoWeAre from "../components/aboutUs/aboutUsComponents/whoWeAre&Why";

function Home() {
  return (
    <>
      <Navbar
        Hero={HeroSection}
        WhoWeAre={WhoWeAre}
        Formulario={Form}
        Gridgallery={Gallery}
      />
    </>
  );
}

export default Home;
