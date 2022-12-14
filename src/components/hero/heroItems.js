import React from "react";
import Styles from "./hero.module.css";

function HeroItems(props) {
  return (
    <div className={`carousel-item active ${Styles.sizeCarusel}`}>
      <div className={`${Styles.heroContent}`}>
          <div className={`${Styles.textContainer}`}>
            <div className={Styles.textPosition}>
              <h1>{props.title}</h1>
              <p>{props.textInfo}</p>
              <div className={Styles.buttonss}>
                  <button>Learn more</button>
              </div>
            </div>
          </div>
          <div className={`${Styles.heroImgContainer}`}>
            <img src={props.heroImg}/>
          </div>
        </div>
    </div>
  )
}

export default HeroItems;
