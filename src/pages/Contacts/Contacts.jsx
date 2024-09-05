/* eslint-disable react/no-unknown-property */
import React from "react";

const Contacts = () => {
  return (
    <section className="contact">
      <header>
        <h2 className="h2 article-title">Contacts</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.430663646016!2d3.2720236740455486!3d6.46700112381929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b88b949d069cb%3A0xc75a85311768313a!2s24%20Road%2C%20G%20Cl%2C%20Festac%20Town%2C%20Festac%201%20102102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1725491022822!5m2!1sen!2sng"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="form-input"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="E-mail Address"
            />
          </div>
          <textarea name="message" id="message" className="form-input" placeholder="Your Message"></textarea>
          <button className="form-btn" type="submit"><span>Send Message</span></button>
        </form>
      </section>
    </section>
  );
};

export default Contacts;
