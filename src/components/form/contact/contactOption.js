import React from "react";
import { FaMapMarker, FaPhone, FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillPlusCircle, AiFillMail } from "react-icons/ai";

const contactConfig = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo faucibus leo, a pellentesque lacus commodo a. In diam tellus, ullamcorper sit amet laoreet sagittis, dignissim a velit. Fusce dictum pretium feugiat. ",
    frase:"WE'D LOVE TO HEAR FROM YOU",
    listSocialItems: [
        {logo: <FaFacebook/>, text: "yourfbusername"},
        {logo: <FaTwitter/>, text: "@twitterhandle"},
        {logo: <AiFillInstagram/>, text: "insta account"},
        {logo: <AiFillPlusCircle/>, text: "plusprofilename"}
    ],
    listContactItems: [
        {logo: <FaMapMarker/>, text: "123, Any Street North Your City Name Country Name. P.O 3554"},
        {logo: <FaPhone/>, text: "+1 234 567 8902"},
        {logo: <AiFillMail/>, text: "contact@yoursite.com"},
    ]
  };
  export { contactConfig };