import React from "react";
import Styles from "../gallery.module.css";
function Cards (props){
    const cardStyles = {
        icon: {
            backgroundColor: props.bColor,
            boxShadow: props.iShadow
        },
      }
    return(
        <div className="col">
            <div class={`${Styles.bodyCard} d-flex flex-column justify-content-evenly`}>
                <div className={`rounded-circle ${Styles.iconSize} d-flex justify-content-center align-items-center`} style={cardStyles.icon}>
                    {props.iconImg}
                </div>
                <h6>{props.cardTitle}</h6>
                <div className={Styles.linea}>
                    <p>{props.cardText}</p>
                </div>
            </div>
        </div>
    )
}
export default Cards;