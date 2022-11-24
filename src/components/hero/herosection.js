<<<<<<< HEAD
import React, { useState } from "react";
import imagenes from "./assets/index";
import HeroItems from "./heroItems";
import "./herosection.css";

const HeroSection = () => {
  const [heroItems, setHeroItems] = useState([
    {
      title: "Primer Elemento",
      textcontent: "Texto Generico",
      img: imagenes.hero1,
      animationTime: 10000,
    },
    {
      title: "Segundo Elemento",
      textcontent: "Texto generico 2",
      img: imagenes.hero2,
      animationTime: 5000,
    },
    {
      title: "Tercer Elemento",
      textcontent: "Texto generico 2",
      img: imagenes.hero3,
      animationTime: 5000,
    },
  ]);
  return (
    <section className="hero-section">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {heroItems.map((items, index) => {
            return (
              <HeroItems
                key={index}
                title={items.title}
                img={items.img}
                textcontent={items.textcontent}
                animationTime={items.animationTime}
              />
            );
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
=======
import './herosection.css'
import imagenes from './assets/index'

function Herosection () {
    console.log(imagenes);
    return (
        <section className="hero-section">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <div className="img-container">
                            <img src={imagenes.hero1} class="hero-img" alt="..."/>
                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="wave" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,96C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                            <div class="carousel-caption">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div className="img-container">
                            <img src={imagenes.hero2} class="hero-img" alt="..."/>
                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="wave" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,96C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                            <div class="carousel-caption">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="img-container">
                            <img src={imagenes.hero3} class="hero-img" alt="..."/>
                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="wave" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,96C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                            <div class="carousel-caption">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        
    )
}

export default Herosection;
>>>>>>> e69cb0b724e0efaaec3569bbc565f3ea818c5c2b
