import React from "react";
import Styles from "../gallery.module.css";
function Cards ({Icon,Shadow, BgColor,Title, Text}){
    const cardStyles = {
        icon: {
            backgroundColor: BgColor,
            boxShadow: Shadow
        },
      }
    return(
        <div className="col-12 col-sm-6 mb-4">
            <div className={`rounded-circle ${Styles.iconSize} d-flex justify-content-center align-items-center`} style={cardStyles.icon}>
                    {Icon}
            </div>
            <div className="mt-3 pe-0 pe-sm-3">
                <h6 className="">{Title}</h6>
                <p className={`mt-4 ${Styles.linea}`}>
                    {Text}
                </p>
            </div> 
        </div>
    )
}
export default Cards;