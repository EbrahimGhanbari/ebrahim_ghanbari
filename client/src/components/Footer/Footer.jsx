import React from "react";
import "./Footer.scss";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import linkedin from "react-useanimations/lib/linkedin";

export default function (props) {
  return (
    <div className="footer">
      <hr />
      <div>
        <div>
          <UseAnimations animation={github} />
          <UseAnimations animation={facebook} />
          <UseAnimations animation={instagram} />
          <UseAnimations animation={linkedin} />
        </div>
        <div className="footer-logo">E</div>
      </div>
    </div>
  );
}
