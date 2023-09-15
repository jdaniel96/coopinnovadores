import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { RegisterFormTemplate } from "../components/registerFormTemplate/registerFormTemplate";

const PDF = () => {
  return (
    <PDFDownloadLink
      document={<RegisterFormTemplate />}
      fileName="formulario-coopinnovadores"
    >
      <button type="button" className="btn btn-dark">
        Descargar y Enviar Formulario
      </button>
    </PDFDownloadLink>
  );
};

export default PDF;
