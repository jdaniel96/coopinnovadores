import React from "react";
import Styles from "./register.module.css"

function InstructionSection(){
    return (
        <section className="mt-5 container d-flex justify-content-between">
        <article className={Styles.stepsCard}>
            <div className={Styles.stepsIcon}> <h3 className={Styles.text}>1</h3></div>
            <div className={Styles.stepsText}>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </article>
        <article className={Styles.stepsCard}>
            <div className={Styles.stepsIcon}> <h3 className={Styles.text}>2</h3></div>
            <div className={Styles.stepsText}>
            <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </article>
        </section>
    )
}

export default InstructionSection;