import styles from "./navbar.module.css";
import React, { useRef, useState, useEffect } from "react";

function Navbar({ Hero, Card, Contact }) {
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
      <header className={isVisible?`${styles.header} ${styles.active}`:`${styles.header}`}>
        <div className="container">
          <nav className={isVisible?`navbar navbar-expand-lg ${styles.alt} ${styles.animation}`:`navbar navbar-expand-lg navbar-dark ${styles.alt}`}>
            <div className="container-fluid">
              <a className="navbar-brand" href="/#">
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
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <h1 onClick={() => showOnPage(card)} className="nav-link">
                      Acerca
                    </h1>
                  </li>
                  <li className="nav-item">
                    <h1
                      onClick={() => showOnPage(contact)}
                      className="nav-link"
                      href="/#"
                    >
                      Contactanos
                    </h1>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">
                      Registrate
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div ref={hero}>
        <Hero />
      </div>
      <div ref={card}>
        <Card />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </>
  );
}

export default Navbar;