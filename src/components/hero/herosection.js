import React from "react";
import SvgComponent from "./assets/svgWave";
import Styles from "./hero.module.css";
import HeroInfo from "./heroInfo/heroInfo";
import HeroItems from "./heroItems";

function Herosection() {
  return (
    <header>
      <div id="carousel" className={`${Styles.innerHeader} carousel slide carousel-fade`} data-bs-ride="carousel">
        <div className={`carousel-inner ${Styles.sizeCarusel}`}>
          {HeroInfo.map((item, index)=> {
            return (
              <HeroItems title={item.title} textInfo={item.textinfo} heroImg={item.heroImg}/>
            )
          })}
        </div>
      </div>
      <SvgComponent/>
    </header>
  )
}

export default Herosection;
