import React from "react";

import { Link } from "react-scroll";
import "./SideBar.scss";

export default function (props) {
  return (
    <div className="sidebar">
      <div>
        <Link
          className="link-pionter"
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
        >
          Project
        </Link>
        <Link
          className="link-pionter"
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
        >
          Résumé
        </Link>
        <Link
          className="link-pionter"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
        >
          About
        </Link>
        <Link
          className="link-pionter"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
