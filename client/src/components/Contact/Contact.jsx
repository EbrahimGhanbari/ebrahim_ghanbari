import React from "react";
import handleViewport from "react-in-viewport";
import Divider from "../Utilities/Divider";
import "./Contact.scss";

const ViewportBlock = handleViewport(Divider /** options: {}, config: {} **/);

export default function (props) {
  return (
    <div id="contact" className="contact">
      <div>
        {/* <div style={{ height: "100vh" }}></div> */}
        <ViewportBlock
          height={"0.01vh"}
          onEnterViewport={() => console.log("COntact enter")}
          onLeaveViewport={() => console.log("COntact leave")}
        />
      </div>
      <h1>Contact me</h1>
      <h2>Want to work together? Drop me a line: ghanbari@ualberta.ca</h2>
    </div>
  );
}
