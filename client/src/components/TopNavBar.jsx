import React, { useState } from "react";

import TrailText from "./Animation/TrailText";
import Trail from "./Animation/Trail";
import { Link } from "react-scroll";

import "./TopNavBar.scss";

export default function (props) {
  const [toggleStatus, setToggleStatus] = useState(true);
  const [open, set] = useState(true);

  return (
    <Trail open={open} xValue={-500}>
      <div className="top_nav">
        <div className="top_nav_left">
          <div className="logo">
            <div
              onMouseEnter={() => setToggleStatus(false)}
              onMouseLeave={() => setToggleStatus(true)}
            >
              {"E"}
              <TrailText text={"brahim Ghanbari"} toggle={toggleStatus} />
            </div>
          </div>
        </div>
        <div className="menu">
          <ul>
            <li class="one">
              <a href="/">Who I am</a>
            </li>
            <li class="two">
              <Link activeClass="active" to="resume" spy={true} smooth={true}>
                Résumé
              </Link>
            </li>
            <li class="three">
              <Link activeClass="active" to="project" spy={true} smooth={true}>
                Project
              </Link>
            </li>
            <li class="four">
              <Link activeClass="active" to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li class="five">
              <Link activeClass="active" to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </Trail>
  );
}
