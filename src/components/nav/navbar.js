import styles from "./navbar.module.css";
import React, { useRef, useState, useEffect } from "react";
import AboutUsInfromation from "../aboutUs/information/information";

function Navbar({ Hero, WhoWeAre, Formulario, Gridgallery, AboutUs }) {
  const [isVisible, setIsVisible] = useState(false);

  const hero = useRef();
  const card = useRef();
  const contact = useRef();

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
      <div
        className={
          isVisible
            ? `${styles.navHeader} ${styles.active}`
            : `${styles.navHeader}`
        }
      >
        <div className="container">
          <nav
            className={
              isVisible
                ? `navbar navbar-expand-lg ${styles.alt} ${styles.animation}`
                : `navbar navbar-expand-lg ${styles.alt}`
            }
          >
            <div className={`container-fluid ${styles.navListColor}`}>
              <a style={{ color: "green" }} className="navbar-brand" href="/#">
                COOPERATIVA
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <h1
                      style={{ color: "white" }}
                      className="nav-link active"
                      aria-current="page"
                      href="/#"
                    >
                      Home
                    </h1>
                  </li>
                  <li className="nav-item">
                    <h1
                      style={{ color: "white" }}
                      onClick={() => showOnPage(card)}
                      className="nav-link"
                    >
                      Acerca
                    </h1>
                  </li>
                  <li className="nav-item">
                    <h1
                      onClick={() => showOnPage(contact)}
                      className="nav-link"
                      style={{ color: "white" }}
                    >
                      Contactanos
                    </h1>
                  </li>
                  <li className="nav-item">
                    <h1
                      style={{ color: "white" }}
                      className="nav-link"
                      href="/register"
                    >
                      Registrate
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {Hero && (
        <div ref={hero}>
          <Hero />
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
      {AboutUs && (
        <div>
          <AboutUs />
        </div>
      )}
    </>
  );
}

export default Navbar;
