/* eslint-disable react/jsx-no-target-blank */
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/EbrahimGhanbari"
          >
            <UseAnimations size={44} animation={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/ebrahim-ghanbari/"
            rel="noreferrer"
            target="_blank"
          >
            <UseAnimations size={44} animation={linkedin} />
          </a>
          <a
            href="https://www.facebook.com/ebrahim.ghanbari1989"
            rel="noreferrer"
            target="_blank"
          >
            <UseAnimations size={44} animation={facebook} />
          </a>
          <a
            href="https://www.instagram.com/ebrahimg11/"
            rel="noreferrer"
            target="_blank"
          >
            <UseAnimations size={44} animation={instagram} />
          </a>
        </div>
        <div className="footer-logo">E</div>
      </div>
    </div>
  );
}
