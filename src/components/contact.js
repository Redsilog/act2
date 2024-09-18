// src/components/Contact.js

import React from "react";
import "./component.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name </label>
          <input type="text" />
        </div>
        <div>
          <label>Age </label>
          <input type="int" />
        </div>
        <div>
          <label>Address </label>
          <input type="text" />
        </div>
        <div>
          <label>Email </label>
          <input type="email" />
        </div>
        <a href="notFound.js">
          <button type="button">Submit</button>
        </a>
      </form>
    </div>
  );
}

export default Contact;
