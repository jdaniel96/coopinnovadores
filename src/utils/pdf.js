import React from "react";
import Pdf from "react-to-pdf";

const PDF = ({ nombre, apellido, correo, cedula, reference }) => {
  return (
    <>
      <Pdf targetRef={reference} filename="post.pdf">
        {({ toPdf }) => (
          <button
            type="button"
            className="btn btn-dark"
            onClick={(e) => {
              e.preventDefault();
              if (nombre || apellido || correo || cedula === " ") {
                alert("Completa todos los campos maifren!");
                return;
              }
              toPdf();
            }}
          >
            Guardar como PDF
          </button>
        )}
      </Pdf>
    </>
  );
};

export default PDF;
