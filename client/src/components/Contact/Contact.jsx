import React, { useState } from "react";
import Transition from "../Animation/Transition";
import Trail from "../Animation/Trail";
import axios from "axios";
import "./Contact.scss";

export default function (props) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  function onNameChange(event) {
    setContact({ ...contact, name: event.target.value });
  }

  function onEmailChange(event) {
    setContact({ ...contact, email: event.target.value });
  }

  function onMessageChange(event) {
    setContact({ ...contact, message: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:8080/contact",
      data: contact,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
    setContact({ name: "", email: "", message: "" });
  }
  return (
    <Trail open={true} xValue={500}>
      <div id="contact" className="contact">
        <div>
          <h1>
            <div style={{ display: "flex", height: "80px" }}>
              Contact me
              {/* <Transition text={"Contact me"} /> */}
            </div>
          </h1>
          <h2>Want to work together? Send me a message here:</h2>
        </div>
        <div className="contact-form">
          <form
            id="contact-form"
            onSubmit={handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <input
                placeholder="Your Name"
                type="text"
                className="form-control "
                onChange={onNameChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Your Email"
                type="text"
                className="form-control"
                onChange={onEmailChange}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control"
                rows="10"
                onChange={onMessageChange}
              />
            </div>
            <button type="submit" className="coolBeans submit_button">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </Trail>
  );
}
