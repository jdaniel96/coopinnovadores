import React, {useState} from "react";
import imagenes from './assets/index';
import HeroItems from "./heroItems";
import './herosection.css';

const HeroSection = () =>{
    const [heroItems, setHeroItems] = useState([
        {
            title: "Primer Elemento",
            textcontent: "Texto Generico",
            img: imagenes.hero1,
            animationTime: 10000
        },
        {
            title: "Segundo Elemento",
            textcontent: "Texto generico 2",
            img: imagenes.hero2,
            animationTime: 5000
        },
        {
            title: "Tercer Elemento",
            textcontent: "Texto generico 2",
            img: imagenes.hero3,
            animationTime: 5000
        }
    ]);
    return (
        <section className="hero-section">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    {heroItems.map((items) => {
                        return <HeroItems 
                                    title={items.title} 
                                    img={items.img} 
                                    textcontent={items.textcontent}
                                    animationTime={items.animationTime}
                                />
                            }
                        )}
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

export default HeroSection;