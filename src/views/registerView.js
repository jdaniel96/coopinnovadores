import React from "react";
import HeroSection from "../components/hero/herosection";
import Navbar from "../components/nav/navbar";
import RegisterSection from "../components/registerSection/registerSection";
import InstructionSection from "../components/registerSection/registerInstructions";

function Register() {
  return (
    <Navbar RegisterSection ={RegisterSection} InstructionSection={InstructionSection}/>
  );
}

export default Register;

