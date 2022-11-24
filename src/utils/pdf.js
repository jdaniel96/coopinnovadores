import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = ({ nombre, apellido, correo, cedula, reference }) => {
  console.log("el nombre es: ", nombre);
  console.log("el apellido es: ", apellido);
  console.log("la cedula es: ", cedula);
  console.log("el correo es: ", correo);
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
