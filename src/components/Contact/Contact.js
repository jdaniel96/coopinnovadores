import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option";
import "./contact.css";

function ContactUs() {
  return (
    <Container className="contact_container mb-4 rounded" id="contactanos">
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Section</h1>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Escribenos</h3>
          <address>
            <strong>Email: coopinnovadores@gmail.com</strong>
            <br />
            <br />
            <p>
              <strong>Phone: 809-222-222</strong>
            </p>
          </address>
          <p className="blockquote">{contactConfig.description}</p>
        </Col>
        <Col>
          <iframe
            title="myFrame"
            id="mapa"
            className="gmap_iframe"
            width="90%"
            height="80%"
            margin="15px"
            src="https://maps.google.com/maps?width=636&amp;height=1000&amp;hl=en&amp;q=Simbawey&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
