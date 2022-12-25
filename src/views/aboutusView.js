import React from "react";
import AboutUs from "../components/aboutUs/aboutUs";
import Header from "../components/header/header";
import HeroConfig from "../components/header/hero/heroConfig/heroConfig";

function AboutUsView() {
  return <Header AboutUs={AboutUs} HeroConfig={HeroConfig.About}/>
}

export default AboutUsView;
