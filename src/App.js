import React from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import HeroSection from "./components/hero/herosection";
import Navbar from "./components/nav/navbar";
import Cards from "./components/cards/cards";
import ContactUs from "./components/contact/contact";

export default function App() {
  return (
    <div className="page-container">
      <Navbar />
      <HeroSection />
      <Cards />
      <ContactUs />
      <Footer />
    </div>
  );
}
