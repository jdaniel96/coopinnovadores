import "./herosection.css";
import imagenes from "./assets/index";
import React from "react";

function Herosection() {
  console.log(imagenes);
  return (
    <section className="hero-section">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="img-container">
              <img src={imagenes.hero1} className="hero-img" alt="..." />
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wave"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="white"
                  fill-opacity="1"
                  d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,96C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
              <div className="carousel-caption">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="img-container">
              <img src={imagenes.hero2} className="hero-img" alt="..." />
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wave"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="white"
                  fill-opacity="1"
                  d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,96C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
              <div className="carousel-caption">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-container">
              <img src={imagenes.hero3} className="hero-img" alt="..." />
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wave"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="white"
                  fill-opacity="1"
                  d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,96C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
              <div className="carousel-caption">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Herosection;
