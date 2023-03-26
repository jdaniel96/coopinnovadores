import React from "react";
import WhoWeAreWhy from "./aboutUsComponents/whoWeAre&Why";
import Styles from "./about.module.css";
import AboutUsInformation from "./information/information";
import WhatWeDo from "./aboutUsComponents/whatWeDo";
import MapSection from "./aboutUsComponents/map";

function AboutUs() {
  return (
    <>
      <WhoWeAreWhy
        title={AboutUsInformation.whoWeAre.title}
        textInfo={AboutUsInformation.whoWeAre.textInfo}
        sectionImg={AboutUsInformation.whoWeAre.sectionImg}
      />
      <WhatWeDo
        title={AboutUsInformation.whatWeDo.title}
        textInfo={AboutUsInformation.whatWeDo.textInfo}
        sectionImg={AboutUsInformation.whatWeDo.sectionImg}
      />
      <div
        className={`d-flex flex-column align-items-center justify-content-center ${Styles.WeAreCreative}`}
      >
        <h1>Somos</h1>
        <h1>Creativos</h1>
      </div>
      <WhoWeAreWhy
        title={AboutUsInformation.whyUs.title}
        textInfo={AboutUsInformation.whyUs.textInfo}
        sectionImg={AboutUsInformation.whyUs.sectionImg}
      />
      <MapSection />
    </>
  );
}

export default AboutUs;
