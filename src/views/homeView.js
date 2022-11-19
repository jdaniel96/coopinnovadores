import Cards from "../components/cards/cards";
import ContactUs from "../components/contact/contact";
// import Post from "../components/form/form";
import HeroSection from "../components/hero/herosection";
import React from "react";
import Form from "../components/form/form";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ContactUs />
      <Form />
      {/* <Post /> */}
    </>
  );
}

export default Home;
