import React from "react"
import Styles from "./gallery.module.css"
import cardsInfo from "./cards/cardsInfo"
import Cards from "./cards/cards"
import { BsArrowRight } from 'react-icons/bs';


function Gallery () {
    return (
        <div className={`d-flex justify-content-center align-items-center ${Styles.prueba}`}>
        <section className={Styles.gallery}>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <div className={`d-flex flex-column justify-content-evenly ${Styles.contenedor}`}>
                        <h1>The best business <br/> solution for you</h1>
                        <p>{cardsInfo.genericTesxt}</p>
                        <a href="/">See More Information <BsArrowRight className={Styles.arrow}/></a>
                    </div>
                </div>
                <div className="col">
                    <div className={`row row-cols-2`}>
                        {cardsInfo.cards.map((item)=>{
                            return (
                                <Cards cardTitle={item.title} cardText={item.text} bColor={item.bColor} iShadow={item.iShadow}/>
                            )
                        })}
                    </div> 
                </div>
            </div>
        </section>
        </div>
    )
}

export default Gallery;