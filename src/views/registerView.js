import React from "react";
import HeroConfig from "../components/header/hero/heroConfig/heroConfig";
import RegisterSection from "../components/registerSection/registerSection";
import InstructionSection from "../components/registerSection/registerInstructions";
import Header from "../components/header/header";

function Register() {
  return <Header RegisterSection={RegisterSection} InstructionSection={InstructionSection} HeroConfig={HeroConfig.register}/>
}

export default Register;
