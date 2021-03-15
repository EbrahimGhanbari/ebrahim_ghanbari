import React, { useState } from "react";
import Trail from "../Animation/Trail";

import "./Description.scss";

export default function (props) {
  const [open] = useState(true);

  return (
    <div id="description">
      {/* <Trail open={open} xValue={300}> */}
      <div className="description">
        <div className="description_text">
          <div>
            <p id="one">Hi, I am Ebrahim</p>
            <p id="two">
              a <b> Full-Stack Developer</b> in beautiful Calgary
            </p>
          </div>
          <p id="three">
            I specialize in Front-End and Back-End, Single-Page Application
            (SPA), and Visual Development.
          </p>
          <p id="four">
            I believe No-Code solutions are the future of work, allowing teams
            to work faster, and place their focus on the design, accessibility,
            and execution of products.
          </p>
        </div>
        <div className="profile_pic">
          <img src="cat.jpg" alt="Italian Trulli"></img>
        </div>
      </div>
      {/* </Trail> */}
    </div>
  );
}
