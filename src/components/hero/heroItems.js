import React from "react";
import Styles from "./hero.module.css";
import { Link } from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

function HeroItems(props) {
  return (
    <div className={`carousel-item active ${Styles.sizeCarusel}`}>
      <div className={`${Styles.heroContent} d-flex align-items-center`}>
        <div className={`${Styles.textContainer} d-flex flex-column align-items-center justify-content-evenly`}>
          <motion.div className={Styles.textPosition}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: [0.8, 1] }}
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
          >
            <h1>{props.title}</h1>
            <p>{props.textInfo}</p>
            <div className={Styles.buttonss}>
            <Link to="/AboutUs"><motion.button 
            whileHover={{
              scale: [1,1.2]
            }}
            whileTap={{ scale: 0.9 }}
            >Learn more</motion.button></Link>
            </div>
          </motion.div>
        </div>
        <div className={`${Styles.heroImgContainer} d-flex align-items-center justify-content-center`}>
          <motion.img src={props.heroImg} alt="img"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: [0.8, 1] }}
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
          />
        </div>
      </div>
    </div>
  );
}

export default HeroItems;
