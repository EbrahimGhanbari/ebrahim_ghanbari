import React, { useState } from "react";
import Trail from "../Animation/Trail";

import "./Description.scss";

function Description(props) {
  const [open, set] = useState(true);

  return (
    <Trail id="description_trail" open={open} xValue={500}>
      <div className="description">
        <div className="description_text">
          <div>
            <p id="one">Hi, I am Ebrahim</p>
            <p id="two">
              a <b> Full-Stack / Front-End Developer</b> in beautiful Calgary
            </p>
          </div>
          <p id="three">
            I specialize in UI/UX Design, Responsive Web Design, and Visual
            Development.
          </p>
          <p id="four">
            I believe No-Code solutions are the future of work, allowing teams
            to work faster, and place their focus on the design, accessibility,
            and execution of products.
          </p>
        </div>
        <div className="profile_pic"> </div>
      </div>
    </Trail>
  );
}

export default Description;
