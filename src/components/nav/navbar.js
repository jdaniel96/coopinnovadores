import styles from "./navbar.module.css";
import React, { useRef, useState, useEffect } from "react";
import AboutUsInfromation from "../aboutUs/information/information";
import { Link } from "react-router-dom";

function Navbar({ Hero, WhoWeAre, Formulario, Gridgallery, AboutUs, RegisterSection, InstructionSection }) {
  const [isVisible, setIsVisible] = useState(false);

  const hero = useRef();
  const contactanos = useRef();

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

    observer.observe(hero.current);
  }, []);

  const showOnPage = (element) => {
    element.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
    <div className={styles.navContenedor}>
    <nav className={isVisible
            ? `fixed-top navbar navbar-expand-lg navbar-dark bg-black p-md-3`
            : `navbar navbar-expand-lg navbar-dark p-md-3 ${styles.navContenedor}`}>
      <div class="container">
        <h3>COOPERATIVA</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <Link to="/#">
            <li class="nav-item">
              <h1 class="nav-link text-white">Home</h1>
            </li>
            </Link>
            <Link to="/AboutUs">
            <li class="nav-item">
              <h1 class="nav-link text-white">Acerca</h1>
            </li>
            </Link>
            {Formulario && (
            <li className="nav-item">
                    <h1
                      onClick={() => showOnPage(contactanos)}
                      className="nav-link"
                      style={{ color: "white" }}
                    >
                      Contactanos
                    </h1>
            </li>)}
            <Link to="/register">
            <li class="nav-item">
              <h1 class="nav-link text-white">Registrate</h1>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    {Hero && (
        <div ref={hero}>
          <Hero />
        </div>
      )}
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
        <div ref={contactanos}>
          <Formulario />
        </div>
      )}
    </>
  );
}

export default Navbar;
