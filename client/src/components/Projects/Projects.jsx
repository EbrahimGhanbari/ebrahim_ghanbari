import React, { useState } from "react";
import handleViewport from "react-in-viewport";
import Divider from "../Utilities/Divider";
import "./Projects.scss";

const ViewportBlock = handleViewport(Divider /** options: {}, config: {} **/);

export default function (props) {
  return (
    <div>
      <div>
        <ViewportBlock
          height={"0.01vh"}
          onEnterViewport={() => console.log("project enter")}
          onLeaveViewport={() => console.log("project leave")}
        />
      </div>
      <div id="project">
        <h1>Selected Works</h1>
        <div className="project">
          <div className="box project_1">
            <img src="cnergreen.png" alt="Italian Trulli" />
            <h2 className="box_text">TEXT TEXT</h2>
          </div>
          <div className="box project_2">
            <img src="cnergreen.png" alt="Italian Trulli" />
            <h2 className="box_text">TEXT TEXT</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
