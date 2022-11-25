import React from "react";
import Pdf from "react-to-pdf";
<<<<<<< HEAD
import { useRef } from "react";

const PDF = ({ nombre, apellido, correo, cedula, reference }) => {
  const formRef = useRef();

  const pdfTemplate = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={formRef.current}
    >
      <h1>CONTRACT TEST OMG JAJAJA WTF </h1>
      <h2>{nombre}</h2>
      <h2>{apellido}</h2>
      <h2>{cedula}</h2>
      <h2>{correo}</h2>
    </div>
  );

  const validateInputs = () => {
    if (
      nombre.length === 0 ||
      apellido.length === 0 ||
      correo.length === 0 ||
      cedula.length === 0
    ) {
      return false;
    }

    return true;
  };

=======

const PDF = ({ nombre, apellido, correo, cedula, reference }) => {
>>>>>>> main
  return (
    <Pdf targetRef={pdfTemplate} filename="post.pdf">
      {({ toPdf }) => (
        <button
          type="button"
          className="btn btn-dark"
          onClick={(e) => {
            e.preventDefault();
            const validation = validateInputs();
            if (validation) toPdf();
          }}
        >
          Guardar como PDF
        </button>
      )}
    </Pdf>
  );
};

export default PDF;
