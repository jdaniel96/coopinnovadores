import React from "react";
import Styles from "../about.module.css"

function WhatWeDo(props){
    return (
        <section className={`${Styles.WhatWeDoSection}  d-flex flex-column justify-content-between align-items-center`}>
            <div className={Styles.WhatWeDoTitle}>
                <h1>What <br/><span>we do</span></h1>
            </div>
            <div className={`align-items-center justify-content-evenly d-flex flex-column flex-lg-row ${Styles.WhatWeDo}`}>
                <div><img src={props.sectionImg} className={Styles.whoWeAre_WhyImg} alt="Section img"/></div>
                <div className={Styles.textContent}>
                    <h3>{props.title}</h3>
                    <p>{props.textInfo}</p>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;