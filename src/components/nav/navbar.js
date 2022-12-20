import styles from "./navbar.module.css";
import React, { useRef, useState, useEffect } from "react";
import AboutUsInfromation from "../aboutUs/information/information";
import { Link } from "react-router-dom";

function Navbar({
  Hero,
  WhoWeAre,
  Formulario,
  Gridgallery,
  AboutUs,
  RegisterSection,
  InstructionSection,
}) {
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
    if (hero.current) {
      observer.observe(hero.current);
    }
  }, []);

  const showOnPage = (element) => {
    element.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-transparent ${styles.navBarIndex}`}
      >
        <div class="container-fluid d-flex flex-row justify-content-between">
          <div>
            <a class="navbar-brand fs-1" href="#">
              Navbar
            </a>
          </div>
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
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link fs-2" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-2" to="/aboutUs">
                  Acerca
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-2" to="/register">
                  Registrate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
      {AboutUs && (
        <div>
          <AboutUs />
        </div>
      )}
    </>
  );
}

export default Navbar;
