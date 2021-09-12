import React from "react";
import "./styles.css";

function Contact(props) {
  return (
    <div className="Contact">
      <h5>{props.contact.number}</h5>
    </div>
  );
}

export default Contact;
