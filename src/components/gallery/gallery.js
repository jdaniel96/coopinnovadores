import React from "react";
import Styles from "./gallery.module.css";
import cardsInfo from "./cards/cardsInfo";
import Cards from "./cards/cards";
import { BsArrowRight } from "react-icons/bs";

function Gallery() {
  return (
    <section
      className={`d-flex justify-content-center align-items-center ${Styles.gallerySection}`}
    >
      <div className={`row ${Styles.gallery}`}>
        <div className="col-12 col-lg-6 mb-4">
        <div
              className={`d-flex flex-column justify-content-evenly ${Styles.contenedor}`}
            >
              <h1>
                Nuestros<br/> 
                Objetivos
              </h1>
              <p>{cardsInfo.genericTesxt}</p>
            </div>
        </div>
        <div className="col-12 col-lg-6 mt-4">
          <div className="row">
            {
              cardsInfo.cards.map((item, index)=>{
                return (
                  <Cards
                    key={index}
                    Icon={item.icon}
                    Shadow={item.iShadow} 
                    BgColor={item.bColor}    
                    Title={item.title}
                    Text={item.text}               
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
