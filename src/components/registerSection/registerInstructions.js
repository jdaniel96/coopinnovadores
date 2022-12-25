import React from "react";
import Styles from "./register.module.css"
import Cards from "./cards/cards";
import cardsItems from "./cards/cardsInfo";

function InstructionSection(){
    return (
        <section className={`container text-center ${Styles.InstructionSection}`}>
            <h1 style={{color: "var(--tercerColor)"}}>¿Como inscribirse?</h1>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam.</p>
            <br/>
            <div className="container d-flex justify-content-evenly align-items-center gap-3 flex-column flex-md-row">
                <>
                {cardsItems.map((item, index) => {
                    return (
                        <Cards titleCard={item.titleCard} textCard={item.textCard} iconCard={item.iconCard} key={index}/>
                    )
                })}
                </>
            </div>
        </section>
    )
}

export default InstructionSection;