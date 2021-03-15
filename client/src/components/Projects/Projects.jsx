import React from "react";
import handleViewport from "react-in-viewport";
import Divider from "../Utilities/Divider";

import "./Projects.scss";

const ViewportBlock = handleViewport(Divider /** options: {}, config: {} **/);

export default function (props) {
  return (
    <div id="project" className="project">
      <div>
        {/* <div style={{ height: "100vh" }}></div> */}
        <ViewportBlock
          height={"0.01vh"}
          onEnterViewport={() => console.log("project enter")}
          onLeaveViewport={() => console.log("project leave")}
        />
      </div>
      <h1>Selected Works</h1>
      <div>
        <div className="project-1"></div>
        <div className="project-2"></div>
      </div>
    </div>
  );
}
