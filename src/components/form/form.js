import Styles from "./form.module.css";
import React, { useState } from "react";
import axios from "axios";
import { contactConfig } from "./contac/contactOption";
import SocialtList from "./contac/socialList";

function Form() {

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
      const [inputs, setInputs] = useState({
        nombre: "",
        correo: "",
        cedula: "",
        menssage: "",
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
            correo: "",
            cedula: "",
            menssage: "",
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
        <section className={Styles.cover}>
            <div class={`${Styles.contenedor}`}>
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col">
                        {/* area informativa */}
                        <div className={`${Styles.textContainer}`}>
                            <h6 className={Styles.frase}>{contactConfig.frase}</h6>
                            <h2 className={Styles.contactUsTitle}>Contact Us</h2>
                            <p className={Styles.contactUsText}>{contactConfig.description}</p>
                            <div className={`${Styles.contactUsText2}`}>
                                <div className={Styles.cont1}>
                                    <b>REACH US THROUGH</b>
                                    <br/>
                                    <>
                                    {contactConfig.listContactItems.map((item, index)=>{
                                        return (
                                            <SocialtList logo={item.logo} text={item.text}/>
                                        )
                                    })}
                                    </>
                                </div>
                                <div className={Styles.cont2}>
                                    <b>SOCIAL NETWORKS</b>
                                    <br/>
                                    <>
                                    {contactConfig.listSocialItems.map((item, index)=>{
                                        return (
                                            <SocialtList logo={item.logo} text={item.text}/>
                                        )
                                    })}
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* area del formulario */}
                    <div class="col">
                        <div className={`${Styles.formSection}`}>
                            <h4 className={Styles.formTitle2}>Send Us A Message</h4>
                            <form className={Styles.formContainer} onSubmit={handleOnSubmit}>
                                <input type="text" placeholder="Your Name" id="nombre" onChange={handleOnChange} required value={inputs.nombre}/>
                                <input type="email" placeholder="someone@example.com" id="correo" name="_replyto" onChange={handleOnChange} required value={inputs.correo}/>
                                <input type="text" placeholder="1-000-000-0000" id="cedula" onChange={handleOnChange} required value={inputs.cedula}/>
                                <textarea name="message" placeholder="Message" id="message" onChange={handleOnChange}required value={inputs.message}/>
                                <button type="submit" disabled={status.submitting}>
                                    {!status.submitting ? !status.submitted
                                    ? "Resgistar"
                                    : "Registar"
                                    : "Registrando..."}
                                </button>
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
    )
}

export default Form;