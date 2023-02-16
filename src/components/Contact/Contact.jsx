import React from "react";
import "../Contact/Contact.css";
import IllusContact from "../Images/illus_contacto.svg";
import IconEmail from "../Images/icon_email.svg";
import IconWhatsApp from "../Images/icon_WhatsApp.svg";

function Contact() {
  return (
    <section className="contact_content">
      <p className="title_contact">
        Conéctate con <br />
        nosotros.
      </p>
      <div className="contact">
        <div>
          <img className="illus_contact" src={IllusContact} alt="" />
        </div>
        <div>
          <p className="text_contact">
            Conéctate con <br />
            nosotros.
          </p>
          <div className="icon_contact">
            <img className="img_contact" src={IconWhatsApp} alt="" />
            <p>3195176868</p>
          </div>
          <div className="icon_contact">
            <img className="img_contact" src={IconEmail} alt="" />
            <p>admin@beunik.co</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
