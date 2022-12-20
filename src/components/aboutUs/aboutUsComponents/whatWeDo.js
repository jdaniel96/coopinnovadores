import React from "react";
import Styles from "../about.module.css"
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

function WhatWeDo(props){
    return (
        <section className={Styles.WhatWeDoSection}>
            <div className={Styles.WhatWeDoTitle}>
                <h1>What <br/><span>we do</span></h1>
            </div>
            <div className={`align-items-center justify-content-evenly d-flex flex-column flex-lg-row ${Styles.WhatWeDo}`}>
                <div><motion.img src={props.sectionImg} className={Styles.whoWeAre_WhyImg} alt="Section img"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: [0.8, 1]}}
                viewport={{ once: true }}
                transition={{
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                  },
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
                /></div>
                <div className={Styles.textContent}>
                    <h3>{props.title}</h3>
                    <p>{props.textInfo}</p>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;