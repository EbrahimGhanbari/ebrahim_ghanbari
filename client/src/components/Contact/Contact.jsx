import React, { useState } from "react";
import handleViewport from "react-in-viewport";
import Divider from "../Utilities/Divider";
import axios from "axios";
import "./Contact.scss";

const ViewportBlock = handleViewport(Divider /** options: {}, config: {} **/);

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
    <div id="contact" className="contact">
      {/* <div>
        <ViewportBlock
          height={"0.0vh"}
          onEnterViewport={() => console.log("COntact enter")}
          onLeaveViewport={() => console.log("COntact leave")}
        />
      </div> */}
      <div>
        <h1>Contact me</h1>
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
  );
}
