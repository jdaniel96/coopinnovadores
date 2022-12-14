import React from "react";
import Styles from "../about.module.css"

function MapSection(){
    return (
        <section className={`d-flex ${Styles.mapSection}`}>
            <div className={Styles.mapInfo}>

            </div>
            <div className={Styles.mapContainer} id="AboutUsMap">

            </div>
        </section>
    )
}

export default MapSection;