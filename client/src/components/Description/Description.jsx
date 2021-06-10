import React from "react";
import Pull from "../Animation/Pull";
import Transition from "../Animation/Transition";
import Trail from "../Animation/Trail";
import "./Description.scss";

const data = require("../../data.json").description;

export default function () {
  // const windowSize = document.documentElement.clientWidth;
  // const titleHeight = windowSize < 850 ? "5vw" : "5vw";
  const titleHeight = "5vw";

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
                a <b> Software Developer</b> in beautiful Canada
              </div>
            </div>
            <p>{data[0]}</p>
            <p>{data[1]}</p>
          </div>
        </div>
      </div>
    </Trail>
  );
}
