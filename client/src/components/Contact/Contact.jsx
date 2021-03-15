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
  }
  return (
    <div id="contact" className="contact">
      <div>
        <ViewportBlock
          height={"0.01vh"}
          onEnterViewport={() => console.log("COntact enter")}
          onLeaveViewport={() => console.log("COntact leave")}
        />
      </div>
      <h1>Contact me</h1>
      <h2>Want to work together? Drop me a line: ghanbari@ualberta.ca</h2>
      <form id="contact-form" onSubmit={handleSubmit.bind(this)} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" onChange={onNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            onChange={onEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            // value={state.message}
            onChange={onMessageChange.bind(this)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    // <div id="contact" className="contact">
    //   <div>
    //     {/* <div style={{ height: "100vh" }}></div> */}
    //     <ViewportBlock
    //       height={"0.01vh"}
    //       onEnterViewport={() => console.log("COntact enter")}
    //       onLeaveViewport={() => console.log("COntact leave")}
    //     />
    //   </div>
    //   <h1>Contact me</h1>
    //   <h2>Want to work together? Drop me a line: ghanbari@ualberta.ca</h2>
    // </div>
  );
}
