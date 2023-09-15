import React from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbSend } from "react-icons/tb";

import { BsDownload } from "react-icons/bs";

const cardsItems = [
  {
    iconCard: <HiOutlineClipboardDocumentList />,
    titleCard: "#1 Llenar el formulario",
    textCard: "El formulario es simple y sencillo de completar!",
  },
  {
    iconCard: <TbSend />,
    titleCard: "#2 Click en enviar formulario!",
    textCard:
      "Una vez llenado el formulario sólo es necesario presionar enviar",
  },
  {
    iconCard: <BsDownload />,
    titleCard: "#3 Click descargar PDF!",
    textCard:
      "Una vez hayas enviado el formulario lleno sólo necesitas descargarlo y firmarlo!",
  },
];

export default cardsItems;
