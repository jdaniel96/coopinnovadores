import React, { useState } from "react";
import axios from "axios";
import Styles from "./register.module.css"
import { PDFDownloadLink } from "@react-pdf/renderer";
import { RegisterFormTemplate } from "../registerFormTemplate/registerFormTemplate";

function RegisterSection (){
    const sexo = ["Masculino","Femenino","Otro"];
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
        conyugeCelular: ""
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
            conyugeCelular: ""
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
    <section className={`${Styles.registerSection} d-flex justify-content-center align-items-center`}>
    <div className={`${Styles.registerContainer} d-flex flex-column flex-md-row`}>
        <div className={`${Styles.registerImg}`}></div>
        <div className={`${Styles.register}`}>
            <form className="row g-5">
                <div class="col-12 tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row g-3 ">
                        <div class="col-12"><h3>Datos Personales</h3></div>
                        <div class="col-md-6">
                            <label for="nombre" class="form-label">Nombres :</label>
                            <input type="text" class="form-control" id="nombre" onChange={handleOnChange} required value={inputs.nombre}/>
                        </div>
                        <div class="col-md-6">
                            <label for="apellido" class="form-label">Apellidos :</label>
                            <input type="text" class="form-control" id="apellido" onChange={handleOnChange} required value={inputs.apellido}/>
                        </div>
                        <div class="col-12">
                            <div><label class="form-label">Sexo :</label></div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="sexo" onChange={handleOnChange} required value={sexo[0]}/>
                                <label class="form-check-label" for="inlineRadio1">Hombre</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="sexo" onChange={handleOnChange} required value={sexo[1]}/>
                                <label class="form-check-label" for="inlineRadio2">Mujer</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="sexo" onChange={handleOnChange} required value={sexo[2]}/>
                                <label class="form-check-label" for="inlineRadio2">Otro</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="cedula_pasaporte" class="form-label">Cedula / Pasaporte :</label>
                            <input type="text" class="form-control" id="cedula_pasaporte" onChange={handleOnChange} required value={inputs.cedula_pasaporte}/>
                        </div>
                        <div class="col-md-6">
                            <label for="nacionalidad" class="form-label">Nacionalidad :</label>
                            <input type="text" class="form-control" id="nacionalidad" onChange={handleOnChange} required value={inputs.nacionalidad}/>
                        </div>
                        <div class="col-md-6">
                            <label for="localidad" class="form-label">Localidad / Comunidad :</label>
                            <input type="text" class="form-control" id="localidad" onChange={handleOnChange} required value={inputs.localidad}/>
                        </div>
                        <div class="col-12">
                            <label for="direccion" class="form-label">Diereccion :</label>
                            <input type="text" class="form-control" id="direccion" onChange={handleOnChange} required value={inputs.direccion}/>
                        </div>
                        <div class="col-md-6">
                            <label for="ingresoMensual" class="form-label">Ingresos Mensuales:</label>
                            <input type="number" class="form-control" id="ingresoMensual" onChange={handleOnChange} required value={inputs.ingresoMensual}/>
                        </div>
                        <div class="col-md-6">
                           <label for="otrosIngresos" class="form-label">Otros Ingresos :</label>
                           <input type="text" class="form-control" id="otrosIngresos" onChange={handleOnChange} required value={inputs.otrosIngresos}/>
                       </div>
                    </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row g-3">
                        <div class="col-12"><h3>Informacion de Contacto</h3></div>
                        <div class="col-md-6">
                            <label for="telefono" class="form-label">Telefono :</label>
                            <input type="number" class="form-control" id="telefono" onChange={handleOnChange} required value={inputs.telefono}/>
                        </div>
                        <div class="col-md-6">
                            <label for="celular" class="form-label">Celular :</label>
                            <input type="number" class="form-control" id="celular" onChange={handleOnChange} required value={inputs.celular}/>
                        </div>
                        <div class="col-12">
                            <label for="correo" class="form-label">Email :</label>
                            <input type="email" class="form-control" id="correo" onChange={handleOnChange} required value={inputs.correo}/>
                        </div>
                        <div></div>
                        <div class="col-12"><h3>Datos Familiares</h3></div>
                        <div class="col-12">
                            <label for="conyugeNombre" class="form-label">Nombre de Conyuge :</label>
                            <input type="text" class="form-control" id="conyugeNombre" onChange={handleOnChange} required value={inputs.conyugeNombre}/>
                        </div>
                        <div class="col-md-6">
                            <label for="conyugeTelefono" class="form-label">Telefono :</label>
                            <input type="number" class="form-control" id="conyugeTelefono" onChange={handleOnChange} required value={inputs.conyugeTelefono}/>
                        </div>
                        <div class="col-md-6">
                          <label for="conyugeCelular" class="form-label">Celular :</label>
                          <input type="number" class="form-control" id="conyugeCelular" onChange={handleOnChange} required value={inputs.conyugeCelular}/>
                       </div>
                       <div></div>
                       <div className={`col-12 ${Styles.btnRegistrar}`}>
                       <PDFDownloadLink onClick={handleOnSubmit} document={<RegisterFormTemplate 
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
                                />} 
                                filename="formularioDeInscripción.pdf">
                            
                                  <button className="btn btn-success"  type="button" disabled={status.submitting}>
                                {!status.submitting
                                ? !status.submitted
                                ? "Enviar Formulario"
                                : "Enviar Formulario"
                                : "Enviando..."}
                            </button>
                          </PDFDownloadLink>
                                
                       </div>
                    </div>
                    </div>
                </div>
                <div className={`${Styles.grupoDeBotones} nav nav-pills mb-3`}>
                    <button class="nav-link active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Atras</button>
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Seguir</button>
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
    </section>
    )
}

export default RegisterSection;