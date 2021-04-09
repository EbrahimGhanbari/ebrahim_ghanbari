import React from "react";
import Pull from "../Animation/Pull";
import Transition from "../Animation/Transition";
import Trail from "../Animation/Trail";

import "./Description.scss";

export default function (props) {
  const windowSize = document.documentElement.clientWidth;
  const titleHeight = windowSize < 850 ? "5vw" : "5vw";

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
                <div style={{ display: "flex", height: titleHeight }}>
                  <Transition text={"H.i., I a.m E.b.r.a.h.i.m."} />
                </div>
              </div>
              <div id="sub_title">
                a <b> Full-Stack Developer</b> in beautiful Canada
              </div>
            </div>
            <p>
              I specialize in Front-End and Back-End, Single-Page Application
              (SPA), and Visual Development.
            </p>
            <p>
              I love being challanged. Working in different group in during my
              time at Weatherford, I learnt how to adapt quickly. I have
              developed a well-rounded skillset through being involved in
              various projects.
            </p>
          </div>
        </div>
      </div>
    </Trail>
  );
}
