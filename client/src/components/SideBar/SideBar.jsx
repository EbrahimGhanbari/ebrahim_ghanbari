import React from "react";
import * as Scroll from "react-scroll";

import { Link } from "react-scroll";
import "./SideBar.scss";

export default function (props) {
  return (
    <div className="sidebar">
      <div>
        <Link activeClass="active" to="project" spy={true} smooth={true}>
          Project
        </Link>
        <Link activeClass="active" to="resume" spy={true} smooth={true}>
          Résumé
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true}>
          About
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          Contact
        </Link>
      </div>
    </div>
  );
}
