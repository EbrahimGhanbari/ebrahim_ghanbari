import React from "react";
import Pull from "../Animation/Pull";
import Transition from "../Animation/Transition";
import Trail from "../Animation/Trail";

import "./Description.scss";

export default function (props) {
  return (
    <Trail open={true} xValue={500}>
      <div id="description">
        <div className="description">
          <div>
            <Pull></Pull>
          </div>
          <div className="description_text">
            <div>
              <div id="title">
                <div style={{ display: "flex", height: "80px" }}>
                  <Transition text={"H.i., I a.m E.b.r.a.h.i.m."} />
                </div>
              </div>
              <div id="sub_title">
                a <b> Full-Stack Developer</b> in beautiful Calgary
              </div>
            </div>
            <p>
              I specialize in Front-End and Back-End, Single-Page Application
              (SPA), and Visual Development.
            </p>
            <p>
              I believe No-Code solutions are the future of work, allowing teams
              to work faster, and place their focus on the design,
              accessibility, and execution of products.
            </p>
          </div>
        </div>
      </div>
    </Trail>
  );
}
