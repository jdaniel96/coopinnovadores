import React, { useRef, useState, useEffect } from "react";
import Styles from "./header.module.css";
import HeroSection from "./hero/hero";
import SvgComponent from "./assets/svgWave";
import AboutUsInfromation from "../aboutUs/information/information";
import heroConfig from "./hero/heroConfig/heroConfig";
import { Link } from "react-router-dom";
import coopInnovadoresLogo from "../../assets/coopInnovadoresLogo.png";

function Header({
  WhoWeAre,
  Formulario,
  Gridgallery,
  AboutUs,
  RegisterSection,
  InstructionSection,
  HeroConfig,
  cooperativaLogo,
}) {
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
  return (
    <>
      <header
        className={
          HeroConfig === heroConfig.Home
            ? `${Styles.homeHeader}`
            : HeroConfig === heroConfig.About
            ? `${Styles.aboutHeader}`
            : `${Styles.registerHeader}`
        }
      >
        <nav
          className={
            isVisible
              ? `navbar navbar-expand-lg navbar-dark p-md-3 ${Styles.nav} fixed-top bg-dark`
              : `navbar navbar-expand-lg navbar-dark p-md-3 ${Styles.nav}`
          }
        >
          <div className="container d-flex flex-row align-items-center ">
            <div
              style={{
                borderRadius: "32px",
                // boxShadow: cooperativaLogo ? "0 0px 6px 6px #272727" : "",
                backgroundColor: cooperativaLogo ? "#272727" : "",
              }}
            >
              <Link
                to={"https://coopinnovadores.com/"}
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex  justify-content-center">
                  <div
                    className={`d-flex align-items-center text-white fs-3`}
                    style={{
                      padding: "5px 10px",
                    }}
                  >
                    <div
                      style={{
                        color: "white",
                        height: "100%",
                        justifyContent: "flex-start",
                      }}
                    >
                      COOPINNOVADORES
                    </div>
                  </div>
                  <div style={{ width: "auto", height: "50px" }}>
                    <img
                      src={coopInnovadoresLogo}
                      style={{
                        marginLeft: "2px",
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                      alt="coopinnovadores logo"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mx-auto"></div>
              <div className="navbar-nav">
                <Link
                  to={"https://coopinnovadores.com"}
                  style={{ textDecoration: "none" }}
                >
                  <h2 className="nav-link text-white fs-5">Inicio</h2>
                </Link>
                <Link
                  to={"https://coopinnovadores.com/aboutUs"}
                  style={{ textDecoration: "none" }}
                >
                  <h2 className="nav-link text-white fs-5">Sobre Nosotros</h2>
                </Link>
                <Link
                  to={"https://coopinnovadores.com/register"}
                  style={{ textDecoration: "none" }}
                >
                  <h2 className="nav-link text-white fs-5">Registrate</h2>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div ref={hero}>
          <HeroSection HeroConfig={HeroConfig} />
        </div>
        <SvgComponent />
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
  );
}
export default Header;
