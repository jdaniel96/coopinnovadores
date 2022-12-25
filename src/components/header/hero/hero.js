import React from "react";
import CarouselItem from "./carouselItem";
import Styles from "./hero.module.css"
import heroConfig from "./heroConfig/heroConfig";
import Items from "./carouselItemInfo"

function HeroSection({HeroConfig}) {
    return (
        <>
        {HeroConfig === heroConfig.Home?
            <div id="carouselInterval" className={`carousel slide ${Styles.carouselFade} d-flex align-items-center`} data-bs-ride="carousel">
                <div className={`carousel-inner ${Styles.carouselFadeContainer}`}>
                    <div className="carousel-item active">
                        <CarouselItem title={Items.primerItem.title} textInfo={Items.primerItem.textInfo} heroImg={Items.primerItem.heroImg}/>
                    </div>
                </div>
            </div>
        :
            <div className={`${Styles.heroContainer} d-flex justify-content-center align-items-center text-center`}>
                <h1>{HeroConfig}</h1>
            </div>
        }
        
        </>
    )
}

export default HeroSection;
