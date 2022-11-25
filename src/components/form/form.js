import styles from "./form.module.css";
import React, { useState } from "react";
import axios from "axios";
import formImg from "./assets/img.png";
import Navbar from "../nav/navbar";
import PDF from "../../utils/pdf";
import { useRef } from "react";

function Form() {
  const formRef = useRef();
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    correo: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        nombre: "",
        apellido: "",
        cedula: "",
        correo: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mwkzyndg",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <>
      <Navbar />
      <section className={styles.formSection}>
        <div className={styles.contenido}>
          <div className="row row-cols-1 row-cols-sm-2">
            <div className="col col-sm-5">
              <div className={styles.infContainer}>
                <div className={styles.textContent}>
                  <h2>
                    <b>Formulario de registro</b>
                  </h2>
                  <p>
                    Lorem Ipsum es simplemente el texto de relleno de las
                    imprentas y archivos de texto.
                  </p>
                </div>
                <img
                  src={formImg}
                  className={styles.formImg}
                  alt="imagen del formulario"
                />
              </div>
            </div>
            <div className="col col-md-7">
              <div className={styles.formContainer}>
                <h4>
                  <b>Formulario de inscripcion</b>
                </h4>
                <form
                  ref={formRef}
                  className="row g-3"
                  onSubmit={handleOnSubmit}
                >
                  <div className="col-md-6">
                    <label for="nombre" className="form-label">
                      <b>Nombre</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      onChange={handleOnChange}
                      required
                      value={inputs.nombre}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="apellido" className="form-label">
                      <b>Apellido</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellido"
                      onChange={handleOnChange}
                      required
                      value={inputs.apellido}
                    />
                  </div>
                  <div className="col-12">
                    <label for="cedula" className="form-label">
                      <b>Cedula</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cedula"
                      onChange={handleOnChange}
                      required
                      value={inputs.cedula}
                    />
                  </div>
                  <div className="col-12">
                    <label for="email" className="form-label">
                      <b>Email</b>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="correo"
                      name="_replyto"
                      onChange={handleOnChange}
                      required
                      value={inputs.correo}
                    />
                  </div>
                  <div className="col-12 d-grid gap-2">
                    <button
                      type="submit"
                      className={`btn btn-primary ${styles.btnColor}`}
                      disabled={status.submitting}
                    >
                      {!status.submitting
                        ? !status.submitted
                          ? "Resgistar"
                          : "Registar"
                        : "Registrando..."}
                    </button>
                    <PDF
                      nombre={inputs.nombre}
                      apellido={inputs.apellido}
                      correo={inputs.correo}
                      cedula={inputs.cedula}
                      reference={formRef.current}
                    />
                  </div>
                </form>
                {status.info.error && (
                  <div className="error">Error: {status.info.msg}</div>
                )}
                {!status.info.error && status.info.msg && (
                  <p>{status.info.msg}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
