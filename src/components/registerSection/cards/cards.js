import React from "react";
import Styles from "../register.module.css"

function Cards(props){
    return (
        <article className={Styles.stepsCard}>
            <div className={Styles.stepsIcon}> {props.iconCard}</div>
            <div className={Styles.stepsText}>
                <h3>{props.titleCard}</h3>
                <br/>
                <p>{props.textCard}</p>
                </div>
        </article>
    )
}

export default Cards;