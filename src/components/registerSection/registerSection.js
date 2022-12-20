import React, { useState } from "react";
import axios from "axios";
import Styles from "./register.module.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { RegisterFormTemplate } from "../registerFormTemplate/registerFormTemplate";
import PDF from "../../utils/pdf";

function RegisterSection() {
  const sexo = ["Masculino", "Femenino", "Otro"];
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    sexo: "",
    cedula_pasaporte: "",
    nacionalidad: "",
    localidad: "",
    ingresoMensual: "",
    otrosIngresos: "",
    telefono: "",
    celular: "",
    correo: "",
    direccion: "",
    conyugeNombre: "",
    conyugeTelefono: "",
    conyugeCelular: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
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
      url: "https://formspree.io/f/moqzaayk",
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
    <section
      className={`${Styles.registerSection} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${Styles.registerContainer} d-flex flex-column flex-md-row`}
      >
        <div className={`${Styles.registerImg}`}></div>
        <div className={`${Styles.register}`}>
          <form className="row g-5">
            <div className="col-12 tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row g-3 ">
                  <div className="col-12">
                    <h3>Datos Personales</h3>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">
                      Nombres :
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
                    <label htmlFor="apellido" className="form-label">
                      Apellidos :
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
                    <div>
                      <label className="form-label">Sexo :</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="sexo"
                        onChange={handleOnChange}
                        required
                        value={sexo[0]}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Hombre
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="sexo"
                        onChange={handleOnChange}
                        required
                        value={sexo[1]}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Mujer
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="sexo"
                        onChange={handleOnChange}
                        required
                        value={sexo[2]}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Otro
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="cedula_pasaporte" className="form-label">
                      Cedula / Pasaporte :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cedula_pasaporte"
                      onChange={handleOnChange}
                      required
                      value={inputs.cedula_pasaporte}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="nacionalidad" className="form-label">
                      Nacionalidad :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nacionalidad"
                      onChange={handleOnChange}
                      required
                      value={inputs.nacionalidad}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="localidad" className="form-label">
                      Localidad / Comunidad :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="localidad"
                      onChange={handleOnChange}
                      required
                      value={inputs.localidad}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="direccion" className="form-label">
                      Diereccion :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="direccion"
                      onChange={handleOnChange}
                      required
                      value={inputs.direccion}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="ingresoMensual" className="form-label">
                      Ingresos Mensuales:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="ingresoMensual"
                      onChange={handleOnChange}
                      required
                      value={inputs.ingresoMensual}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="otrosIngresos" className="form-label">
                      Otros Ingresos :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="otrosIngresos"
                      onChange={handleOnChange}
                      required
                      value={inputs.otrosIngresos}
                    />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row g-3">
                  <div className="col-12">
                    <h3>Informacion de Contacto</h3>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label">
                      Telefono :
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="telefono"
                      onChange={handleOnChange}
                      required
                      value={inputs.telefono}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="celular" className="form-label">
                      Celular :
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="celular"
                      onChange={handleOnChange}
                      required
                      value={inputs.celular}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="correo" className="form-label">
                      Email :
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="correo"
                      onChange={handleOnChange}
                      required
                      value={inputs.correo}
                    />
                  </div>
                  <div></div>
                  <div className="col-12">
                    <h3>Datos Familiares</h3>
                  </div>
                  <div className="col-12">
                    <label htmlFor="conyugeNombre" className="form-label">
                      Nombre de Conyuge :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="conyugeNombre"
                      onChange={handleOnChange}
                      required
                      value={inputs.conyugeNombre}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="conyugeTelefono" className="form-label">
                      Telefono :
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="conyugeTelefono"
                      onChange={handleOnChange}
                      required
                      value={inputs.conyugeTelefono}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="conyugeCelular" className="form-label">
                      Celular :
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="conyugeCelular"
                      onChange={handleOnChange}
                      required
                      value={inputs.conyugeCelular}
                    />
                  </div>
                  <div className={`col-12 ${Styles.btnRegistrar}`}>
                    <button
                      className="btn btn-success"
                      onClick={handleOnSubmit}
                      type="button"
                      disabled={status.submitting}
                    >
                      {!status.submitting
                        ? !status.submitted
                          ? "Enviar Formulario"
                          : "Enviar Formulario"
                        : "Enviando..."}
                    </button>
                    <PDFDownloadLink
                      document={
                        <RegisterFormTemplate
                          Nombre={inputs.nombre}
                          Apellido={inputs.apellido}
                          Sexo={inputs.sexo}
                          Cedula={inputs.cedula_pasaporte}
                          Nacionalidad={inputs.nacionalidad}
                          Localidad={inputs.localidad}
                          IngresoMensual={inputs.ingresoMensual}
                          OtrosIngresos={inputs.otrosIngresos}
                          Telefono={inputs.telefono}
                          Celular={inputs.celular}
                          Correo={inputs.correo}
                          Direccion={inputs.direccion}
                          ConyugeNombre={inputs.conyugeNombre}
                          ConyugeTelefono={inputs.conyugeTelefono}
                          ConyugeCelular={inputs.conyugeCelular}
                        />
                      }
                      filename="formularioDeInscripción.pdf"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setInputs({
                            nombre: "",
                            apellido: "",
                            sexo: "",
                            cedula_pasaporte: "",
                            nacionalidad: "",
                            localidad: "",
                            ingresoMensual: "",
                            otrosIngresos: "",
                            telefono: "",
                            celular: "",
                            correo: "",
                            direccion: "",
                            conyugeNombre: "",
                            conyugeTelefono: "",
                            conyugeCelular: "",
                          });
                        }}
                        className="btn btn-dark"
                      >
                        Descargar PDF
                      </button>
                    </PDFDownloadLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${Styles.grupoDeBotones} nav nav-pills mb-3`}>
              <button
                className="nav-link active "
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Atras
              </button>
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Seguir
              </button>
            </div>
          </form>
          {status.info.error && (
            <div className="error" style={{ color: "red" }}>
              Error: {status.info.msg}
            </div>
          )}
          {!status.info.error && status.info.msg && (
            <p style={{ color: "red" }}>{status.info.msg}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
