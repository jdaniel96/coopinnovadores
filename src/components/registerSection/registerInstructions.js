import React from "react";
import Styles from "./register.module.css"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbSend } from "react-icons/tb";
import { FaSignature } from "react-icons/fa";

function InstructionSection(){
    return (
        <section className="container text-center">
            <h1 style={{color: "var(--tercerColor)"}}>¿Como inscribirse?</h1>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam.</p>
            <br/>
            <div className="container d-flex justify-content-evenly align-items-center gap-3 flex-column flex-md-row">
                <article className={Styles.stepsCard}>
                    <div className={Styles.stepsIcon}> <HiOutlineClipboardDocumentList/></div>
                    <div className={Styles.stepsText}>
                        <h3>Lorem Ipsum</h3>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </article>
                <article className={Styles.stepsCard}>
                    <div className={Styles.stepsIcon}> <TbSend/></div>
                    <div className={Styles.stepsText}>
                        <h3>Lorem Ipsum</h3>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </article>
                <article className={Styles.stepsCard}>
                    <div className={Styles.stepsIcon}> <FaSignature/></div>
                    <div className={Styles.stepsText}>
                        <h3>Lorem Ipsum</h3>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default InstructionSection;