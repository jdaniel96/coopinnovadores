import React from "react";
import { FaHubspot, FaUserGraduate } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import { IoAnalyticsSharp } from "react-icons/io5";

const cardsInfo = {
    genericTesxt:"Learning is the process of acquiring new, or modifying existing, knowledge, behaviors, skills, values, or preferences. The ability to learn is possessed by humans, animals" ,
    cards: [
        {icon:<FaHubspot/>, title: "Amazing Courses", text: "Learning is the process of acquiring new, or modifying", bColor: "rgb(251, 37, 118)", iShadow: "0px 5px 15px 0px rgba(251, 37, 118, 0.40)"},
        {icon:<FaUserGraduate/>, title: "Daily Analysis", text: "Learning is the process of acquiring new, or modifying", bColor: "rgb(0, 231, 255)",iShadow: "0px 5px 15px 0px rgba(0, 231, 255, 0.40)"},
        {icon:<BsFillAwardFill/>, title: "Creative Solutions", text: "Learning is the process of acquiring new, or modifying", bColor: "rgb(129, 12, 168)", iShadow: "0px 5px 15px 0px rgba(129, 12, 168, 0.40)"},
        {icon:<IoAnalyticsSharp/>, title: "Bootcamps", text: "Learning is the process of acquiring new, or modifying", bColor: "rgb(255, 112, 0)", iShadow: "0px 5px 15px 0px rgba(255, 112, 0, 0.40)"}  
    ]
}

export default cardsInfo;