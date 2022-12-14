import React from "react";
import Styles from "../form.module.css";
function SocialtList (props){
    return(
        <>
            <span className={Styles.listItem}>
                <p className={Styles.listIcon}>{props.logo}</p>
                <p>{props.text}</p>
            </span>                       
        </>
    )
}
export default SocialtList;

