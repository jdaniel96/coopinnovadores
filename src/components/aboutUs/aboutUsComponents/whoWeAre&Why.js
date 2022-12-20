import React from "react";
import Styles from "../about.module.css"
function WhoWeAre(props) {
    return (
        <section className={`d-flex align-items-center justify-content-center ${Styles.whoWeAre_WhySection}`}>
            <div className={`align-items-center justify-content-evenly d-flex flex-column flex-lg-row ${Styles.whoWeAre_WhyContainer}`}>
                <div className={Styles.textContent}>
                    <h3>{props.title}</h3>
                    <p>{props.textInfo}</p>
                </div>
                <div><img src={props.sectionImg} className={Styles.whoWeAre_WhyImg} alt="Section img"/></div> 
            </div>
        </section>
    )
}

export default WhoWeAre;