import React from "react";
import Transition from "../Animation/Transition";
import Card from "../Animation/Card";
import Trail from "../Animation/Trail";

import "./Projects.scss";

const projects = require("../../data.json").projects;

export default function (props) {
  return (
    <div>
      <Trail open={true} xValue={500}>
        <div>
          <div id="project">
            <h1>
              <div style={{ display: "flex", height: "80px" }}>
                <Transition text={"S.e.l.e.c.t.e.d W.o.r.k.s"} />
              </div>
            </h1>
            <div className="project">
              <div className="box_container">
                <div className="box">
                  <Card project={projects[0]} />
                </div>
                <div className="box">
                  <Card project={projects[1]} />
                </div>
              </div>
              <div className="box_container">
                <div className="box">
                  <Card project={projects[2]} />
                </div>
                <div className="box">
                  <Card project={projects[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Trail>
      <div id="project_div"> </div>
    </div>
  );
}
