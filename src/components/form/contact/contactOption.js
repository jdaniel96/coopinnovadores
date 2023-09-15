import React from "react";
import { FaMapMarker, FaPhone, FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillPlusCircle, AiFillMail } from "react-icons/ai";

const contactConfig = {
  description:
    "Siempre estamos aquí para atender sus necesidades y preguntas. Su satisfacción es nuestra prioridad, por lo que los invitamos a ponerse en contacto con nosotros en cualquier momento. No duden en llenar nuestro formulario de contacto en línea, que está diseñado para facilitar la comunicación directa con nuestro equipo. Estamos ansiosos por escuchar sus comentarios, responder sus consultas y ayudarles en lo que necesiten. ",
  frase: "Nos encantaría ponernos en contacto contigo",
  listSocialItems: [
    { logo: <FaFacebook />, text: "yourfbusername" },
    { logo: <FaTwitter />, text: "@twitterhandle" },
    { logo: <AiFillInstagram />, text: "insta account" },
    { logo: <AiFillPlusCircle />, text: "plusprofilename" },
  ],
  listContactItems: [
    {
      logo: <FaMapMarker />,
      text: "Calle José Contreras No 28, local 2B",
    },
    { logo: <FaPhone />, text: "+1 809 957 7626" },
    { logo: <AiFillMail />, text: "Coopinnovadores@gmail.com" },
  ],
};
export { contactConfig };
