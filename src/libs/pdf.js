import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { RegisterFormTemplate } from "../components/registerFormTemplate/registerFormTemplate";

const PDF = () => {
  return (
    <PDFDownloadLink
      document={<RegisterFormTemplate />}
      filename="formularioDeInscripción.pdf"
    >
      <button type="button" className="btn btn-dark">
        Descargar Y Enviar Formulario
      </button>
    </PDFDownloadLink>
  );
};

export default PDF;
