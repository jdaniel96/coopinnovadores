import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>CoopInnovadores</h4>
            <ul className="list-unstyle">
              <li>Something Here</li>
              <li>Something Here</li>
              <li>Something Here</li>
            </ul>
          </div>
          <div className="col">
            <h4>Ubicacion</h4>
            <ul className="list-unstyle">
              <li>Something Here</li>
              <li>Something Here</li>
              <li>Something Here</li>
            </ul>
          </div>
          <div className="col">
            <h4>Contactanos</h4>
            <ul className="list-unstyle">
              <li>Something About</li>
              <li>Something About</li>
              <li>Something About</li>
            </ul>
          </div>
          <div className="col">
            <h4>Enlaces</h4>
            <ul className="list-unstyle">
              <li>Something About</li>
              <li>Something About</li>
              <li>Something About</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Coopinnovadores Inc | All rights
            reserved | Terms of service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
