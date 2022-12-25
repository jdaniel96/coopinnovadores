import React from "react";
import { FaHubspot, FaUserGraduate } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import { IoAnalyticsSharp } from "react-icons/io5";

const cardsInfo = {
    genericTesxt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum adipisci quidem atque quae quod nisi fuga officia id, quis nemo minima incidunt? Soluta quasi in ipsam explicabo non ea?" ,
    cards: [
        {icon:<FaHubspot/>, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", bColor: "rgb(251, 37, 118)", iShadow: "0px 5px 15px 0px rgba(251, 37, 118, 0.40)"},
        {icon:<FaUserGraduate/>, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", bColor: "rgb(0, 231, 255)",iShadow: "0px 5px 15px 0px rgba(0, 231, 255, 0.40)"},
        {icon:<BsFillAwardFill/>, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", bColor: "rgb(129, 12, 168)", iShadow: "0px 5px 15px 0px rgba(129, 12, 168, 0.40)"},
        {icon:<IoAnalyticsSharp/>, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", bColor: "rgb(255, 112, 0)", iShadow: "0px 5px 15px 0px rgba(255, 112, 0, 0.40)"}  
    ]
}

export default cardsInfo;