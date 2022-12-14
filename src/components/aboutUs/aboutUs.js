import React from "react";
import WhoWeAre_Why from "./aboutUsComponents/whoWeAre&Why";
import Styles from "./about.module.css";
import AboutUsInfromation from "./information/information"
import WhatWeDo from "./aboutUsComponents/whatWeDo";
import MapSection from "./aboutUsComponents/map";

function AboutUs (){
    return (
        <>
        <WhoWeAre_Why 
            title={AboutUsInfromation.whoWeAre.title} 
            textInfo={AboutUsInfromation.whoWeAre.textInfo} 
            sectionImg={AboutUsInfromation.whoWeAre.sectionImg}
        />
        <WhatWeDo
            title={AboutUsInfromation.whatWeDo.title} 
            textInfo={AboutUsInfromation.whatWeDo.textInfo} 
            sectionImg={AboutUsInfromation.whatWeDo.sectionImg}
        />
        <div className={`d-flex flex-column align-items-center justify-content-center ${Styles.WeAreCreative}`}>
            <h1>WE ARE <br/> CREATIVE</h1>
        </div>
        <WhoWeAre_Why 
            title={AboutUsInfromation.whyUs.title} 
            textInfo={AboutUsInfromation.whyUs.textInfo} 
            sectionImg={AboutUsInfromation.whyUs.sectionImg} 
        />
        <MapSection/>
        </>

    )
}

export default AboutUs;