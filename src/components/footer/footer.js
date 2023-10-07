import React from "react";
import Styles from "./footer.module.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdTouchApp } from "react-icons/md";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import infoConfig from "./info/info";
import coopinnovadoresLogo from "../../assets/smallcooplogocolored.png";

function Footer() {
  return (
    <footer
      className={`d-flex flex-column justify-content-between align-items-center`}
    >
      <div className={`px-1 ${Styles.contenedor}`}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3">
          <div
            style={{ width: "100%" }}
            className={`d-flex flex-column flex-xl-row flex-lg-row flex-md-column  justify-content-center align-items-center ${Styles.area}`}
          >
            <img
              src={coopinnovadoresLogo}
              style={{
                width: "12em",
                height: "12em",
                objectFit: "cover",
              }}
              alt="coopinnovadores logo"
            />
          </div>
        </div>
      </div>
      <div className={`text-center ${Styles.colR}`}>
        <p>
          Copyright © 2023 <span className={Styles.autor}>Coopinnovadores</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
