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
        style={{ width: "100%" }}
        className={`navbar navbar-expand-lg bg-transparent position-absolute  ${styles.navBarIndex}`}
      >
        <div
          style={{ width: "100%", paddingLeft: "20px" }}
          className="container-fluid d-flex "
        >
          <div>
            <a className="navbar-brand fs-1 text-white pl-2 " href="#">
              Navbar
            </a>
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
          <div
            className="collapse navbar-collapse items-center justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex gap-lg-5 text-white  gap-sm-1 justify-content-around">
              <li className="nav-item mt-0">
                <Link
                  className="nav-link fs-4 text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mt-0">
                <Link className="nav-link text-white fs-4" to="/aboutUs">
                  Acerca
                </Link>
              </li>
              <li className="nav-item mt-0">
                <Link className="nav-link text-white fs-4" to="/register">
                  Únete
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
