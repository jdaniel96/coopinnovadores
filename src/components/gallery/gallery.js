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
      <div className={Styles.gallery}>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <div
              className={`d-flex flex-column justify-content-evenly ${Styles.contenedor}`}
            >
              <h1>
                Nuestros
                <br /> Objetivos
              </h1>
              <p>{cardsInfo.genericTesxt}</p>
            </div>
          </div>
          <div className="col">
            <div className={`row row-cols-2`}>
              {cardsInfo.cards.map((item, index) => {
                return (
                  <Cards
                    key={index}
                    iconImg={item.icon}
                    cardTitle={item.title}
                    cardText={item.text}
                    bColor={item.bColor}
                    iShadow={item.iShadow}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
