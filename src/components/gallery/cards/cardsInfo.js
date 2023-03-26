import React from "react";
import { FaHubspot, FaUserGraduate } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import { IoAnalyticsSharp } from "react-icons/io5";

const cardsInfo = {
  genericTesxt:
    "El apoyo al desarrollo tecnológico, el acceso a una educación de calidad atreves del apoyo para que puedan participar en programa de grado, maestría, intercambios tecnológicos, pasantía en el exterior especialmente en los países que presenten mayor desarrollo en las áreas que representen mayor interés para el avance de nuestro país y el de ellos propios.",
  cards: [
    {
      icon: <FaHubspot />,
      title: "Inversiones / Financiamientos",
      text: "Invertir y financiar de manera inteligente es vital para alcanzar objetivos financieros y asegurar un futuro estable",
      bColor: "rgb(251, 37, 118)",
      iShadow: "0px 5px 15px 0px rgba(251, 37, 118, 0.40)",
    },
    {
      icon: <IoAnalyticsSharp />,
      title: "Salud",
      text: "Mantener una buena salud es esencial para vivir una vida feliz y plena.",
      bColor: "rgb(0, 231, 255)",
      iShadow: "0px 5px 15px 0px rgba(0, 231, 255, 0.40)",
    },
    {
      icon: <BsFillAwardFill />,
      title: "Ahorros",
      text: "Ahorrar dinero es una decisión financiera sabia que puede proporcionar seguridad y tranquilidad a largo plazo.",
      bColor: "rgb(129, 12, 168)",
      iShadow: "0px 5px 15px 0px rgba(129, 12, 168, 0.40)",
    },
    {
      icon: <FaUserGraduate />,
      title: "Educación",
      text: "Tener una educación es crucial para el crecimiento personal, el éxito profesional y el progreso social.",
      bColor: "rgb(255, 112, 0)",
      iShadow: "0px 5px 15px 0px rgba(255, 112, 0, 0.40)",
    },
  ],
};

export default cardsInfo;
