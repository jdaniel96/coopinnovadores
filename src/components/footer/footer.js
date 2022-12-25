import React from "react";
import Styles from "./footer.module.css"
import { BiRightArrowAlt } from "react-icons/bi";
import { MdTouchApp } from "react-icons/md";
import {BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import infoConfig from "./info/info";

function Footer() {
  return (
  <footer className={`d-flex flex-column justify-content-between align-items-center`}>
    <div className={`px-1 ${Styles.contenedor}`}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3">
        <div className="col">
          <div className={`d-flex flex-column justify-content-between ${Styles.area}`}>
            <div className={`d-flex ${Styles.logoArea}`}>
              <div className={`rounded-circle ${Styles.color} d-flex justify-content-center align-items-center`}><MdTouchApp/></div>
              <h2>Lorem ipsum</h2>
            </div>
            <p>{infoConfig.genericText[0]}</p>
            <h3>{infoConfig.phoneNumber}</h3>
            <a href="/">{infoConfig.email}</a>
          </div>
        </div>
        <div className="col">
          <div className={`d-flex justify-content-evenly ${Styles.area2} ${Styles.colR}`}>
            {infoConfig.list.map((item,index)=>{
              return (
                <div className={Styles.listContainer} key={index}>
                  <h4>{item.title}</h4>
                  <ul className="list-unstyled">
                    {item.list.map((item2,index)=><li key={index}>{item2}</li>)}
                  </ul>
                </div>
                )}
              )}
          </div>
        </div>
        <div className={`col ${Styles.colW}`}>
          <div className={`d-flex flex-column justify-content-between ${Styles.area} ${Styles.colR}`}>
            <h3>Lorem ipsum</h3>
            <br/>
            <p>{infoConfig.genericText[1]}</p>
            <button className={`d-flex justify-content-between align-items-center ${Styles.emailBtn}`}>Email Address <BiRightArrowAlt className={Styles.iconBtn}/></button>
            <div className={`d-flex justify-content-between align-items-center ${Styles.socialContainer}`}> <BsFacebook/> <BsInstagram/> <FaLinkedinIn/> <BsYoutube/> </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`text-center ${Styles.colR}`}>
      <p>Copyright ©2022 All rights reserved | This template is made by <span className={Styles.autor}>Lorem ipsum</span></p>
    </div>
  </footer>
  )
}

export default Footer;