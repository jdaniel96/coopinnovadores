import React from "react";
import HeroConfig from "../components/header/hero/heroConfig/heroConfig";
import Form from "../components/form/form";
import Gallery from "../components/gallery/gallery";
import WhoWeAre from "../components/aboutUs/aboutUsComponents/whoWeAre&Why";
import Header from "../components/header/header";

function Home() {
  return ( 
  <Header
    WhoWeAre={WhoWeAre} 
    Formulario={Form}
    Gridgallery={Gallery}
    HeroConfig={HeroConfig.Home} 
  />
  )
}

export default Home;
