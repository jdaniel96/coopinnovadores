import React from "react";
function HeroItems(props) {
  return (
    <>
      <div
        className="carousel-item active"
        data-bs-interval={props.animationTime}
      >
        <div className="img-container">
          <img src={props.img} class="hero-img" alt="..." />
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="wave"
            viewBox="0 0 1440 320"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,96C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="carousel-caption">
            <h5>{props.title}</h5>
            <p>{props.textcontent}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroItems;
