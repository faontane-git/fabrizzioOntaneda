import React from 'react';
import './Contact.css';
import cvPdf from '../recursos/Fabrizzio Ontaneda_CV.pdf'; // Ruta al archivo PDF de tu CV

function Contact() {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <b>Puedes contactarme a través de los siguientes medios:</b>
      <ul>
        <li>Email: fabrizziontaneda@gmail.com</li>
        <li>Teléfono: +593 981952846</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/fabrizzio-ontaneda-25688820b/">Fabrizzio Ontaneda</a></li>
        <li>CV: <a href={cvPdf} download>Descargar </a></li>
      </ul>
    </section>
  );
}

export default Contact;
