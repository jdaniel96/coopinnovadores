import React, { useRef, useState, useEffect } from "react";
import Styles from "./header.module.css"
import HeroSection from "./hero/hero";
import SvgComponent from "./assets/svgWave";
import AboutUsInfromation from "../aboutUs/information/information";
import heroConfig from "./hero/heroConfig/heroConfig";
import { Link } from "react-router-dom";

function Header({WhoWeAre, Formulario, Gridgallery, AboutUs, RegisterSection, InstructionSection, HeroConfig }){
  const [isVisible, setIsVisible] = useState(false);

  const hero = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, objInt) => {
        if (!entries[0].isIntersecting) setIsVisible(true);
        if (entries[0].isIntersecting) setIsVisible(false);
      },
      {
        threshold: 0.1,
        root: null,
      }
    );
    if (hero.current) {
      observer.observe(hero.current);
    }
  }, []);
    return(
        <>
        <header className={HeroConfig === heroConfig.Home?`${Styles.homeHeader}`: HeroConfig === heroConfig.About?`${Styles.aboutHeader}`:`${Styles.registerHeader}`}>
          <nav className={isVisible?`navbar navbar-expand-lg navbar-dark p-md-3 ${Styles.nav} fixed-top bg-dark`:`navbar navbar-expand-lg navbar-dark p-md-3 ${Styles.nav}`}>
            <div className="container">
            <Link to={"/"} style={{textDecoration: 'none'}}><h2 className={`text-white fs-3`}>WEB ZONE</h2></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="mx-auto"></div>
                <div className="navbar-nav">
                  <Link to={"/"} style={{textDecoration: 'none'}}><h2 className="nav-link text-white fs-5">Inicio</h2></Link>
                  <Link to={"/aboutUs"} style={{textDecoration: 'none'}}><h2 className="nav-link text-white fs-5">Acerca de</h2></Link>
                  <Link to={"/register"} style={{textDecoration: 'none'}}><h2 className="nav-link text-white fs-5">Registrate</h2></Link>
                </div>
              </div>
            </div>
          </nav>
          <div ref={hero}>
            <HeroSection HeroConfig={HeroConfig}/>
          </div>
          <SvgComponent/>
        </header>
        <main>
        {AboutUs && (
        <div>
          <AboutUs />
        </div>
      )}
      {InstructionSection && (
        <div>
          <InstructionSection />
        </div>
      )}
      {RegisterSection && (
        <div>
          <RegisterSection />
        </div>
      )}
      {WhoWeAre && (
        <div>
          <WhoWeAre 
            title={AboutUsInfromation.whoWeAre.title}
            textInfo={AboutUsInfromation.whoWeAre.textInfo}
            sectionImg={AboutUsInfromation.whoWeAre.sectionImg}
          />
        </div>
      )}

      {Gridgallery && (
        <div>
          <Gridgallery />
        </div>
      )}
      {Formulario && (
        <div>
          <Formulario />
        </div>
      )}
        </main>   
        </>
    )
}
export default Header;