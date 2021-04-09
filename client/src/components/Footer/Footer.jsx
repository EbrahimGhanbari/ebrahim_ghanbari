/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.scss";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import linkedin from "react-useanimations/lib/linkedin";

export default function (props) {
  const windowSize = document.documentElement.clientWidth;
  const iconSize = windowSize < 850 ? 30 : 44;

  function scrollToTop() {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }

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
            <UseAnimations size={iconSize} animation={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/ebrahim-ghanbari/"
            rel="noreferrer"
            target="_blank"
          >
            <UseAnimations size={iconSize} animation={linkedin} />
          </a>
          <a
            href="https://www.facebook.com/ebrahim.ghanbari1989"
            rel="noreferrer"
            target="_blank"
          >
            <UseAnimations size={iconSize} animation={facebook} />
          </a>
          <a
            href="https://www.instagram.com/ebrahimg11/"
            rel="noreferrer"
            target="_blank"
          >
            <UseAnimations size={iconSize} animation={instagram} />
          </a>
        </div>
        <div onClick={scrollToTop} className="footer-logo">
          E
        </div>
      </div>
    </div>
  );
}
