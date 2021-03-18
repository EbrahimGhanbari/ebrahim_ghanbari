import React from "react";

import { Link } from "react-scroll";
import "./SideBar.scss";

export default function (props) {
  return (
    <div className="sidebar">
      <div>
        <Link
          className="link-pointer"
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
        >
          <div className=""> Project</div>
        </Link>
        <Link
          className="link-pointer"
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
        >
          <div className=""> Résumé</div>
        </Link>
        <Link
          className="link-pointer"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
        >
          <p className=""> About</p>
        </Link>
        <Link
          className="link-pointer"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
        >
          <p className="sidebar_border"> Contact</p>{" "}
        </Link>
      </div>
    </div>
  );
}
