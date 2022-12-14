import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { useRef, Pdf } from "react";
import { RegisterFormTemplate } from "../components/registerFormTemplate/registerFormTemplate";

const PDF = () => {
  return (
    // <PDFDownloadLink
    //   document={<RegisterFormTemplate />}
    //   filename="formularioDeInscripción.pdf"
    // >
    //   <button type="button" className="btn btn-dark">
    //     Descargar Formulario
    //   </button>
    // </PDFDownloadLink>
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <RegisterFormTemplate />
    </PDFViewer>
  );
};

export default PDF;
