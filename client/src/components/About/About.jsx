import React from "react";
import Stack from "../Animation/Stack";
import Transition from "../Animation/Transition";
import Trail from "../Animation/Trail";
import "./About.scss";

const data = require("../../data.json").about_me;
export default function (props) {
  return (
    <div>
      <Trail open={true} xValue={500}>
        <div>
          <div id="about" className="about">
            <div className="about_text">
              <h1>
                <div style={{ display: "flex", height: "80px" }}>
                  <Transition text={"A.b.o.u.t m.e"} />
                </div>
              </h1>
              <h2>{data[0].question}</h2>
              <p>{data[0].answer[0]}</p>
              <h2>{data[1].question}</h2>
              <p>{data[1].answer[0]}</p>
              <p>{data[1].answer[1]}</p>
              <h2>{data[2].question}</h2>
              <p>{data[2].answer[0]}</p>
              <h2>{data[3].question}</h2>
              <p>{data[3].answer[0]}</p>
            </div>
            {/* <Stack /> */}
          </div>
        </div>
      </Trail>
      <div id="about_div"> </div>
    </div>
  );
}
