import React from "react";
import { Link } from "react-router-dom";
import Styles from "./hero.module.css";

function CarouselItem(props) {
  return (
    <div className={`container-fluid d-flex align-items-center`}>
      <div
        className={`${Styles.textContainer} d-flex flex-column align-items-center justify-content-evenly`}
      >
        <div
          className={`${Styles.textPosition} d-flex justify-content-center flex-column`}
        >
          <h1 style={{ fontSize: "40px" }}>{props.title}</h1>
          <p style={{ fontSize: "24px", lineHeight: "150%" }}>
            {props.textInfo}
          </p>
          <div className={Styles.buttonss}>
            <Link to="/AboutUs">
              <button>Saber más</button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${Styles.heroImgContainer} d-flex align-items-center justify-content-center`}
      >
        <img src={props.heroImg} alt="img" />
      </div>
    </div>
  );
}

export default CarouselItem;
