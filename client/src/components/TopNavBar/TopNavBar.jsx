import React, { useState } from "react";

import TrailText from "../Animation/TrailText";
import Trail from "../Animation/Trail";
import { Link } from "react-scroll";

import "./TopNavBar.scss";

export default function (props) {
  const [toggleStatus, setToggleStatus] = useState(true);
  // const [open, set] = useState(true);

  return (
    <Trail open={true} xValue={-500}>
      <div className="top_nav">
        <div className="top_nav_left">
          <a href="/" className="logo">
            <div
              onMouseEnter={() => setToggleStatus(false)}
              onMouseLeave={() => setToggleStatus(true)}
            >
              {"E"}
              <TrailText text={"brahim Ghanbari"} toggle={toggleStatus} />
            </div>
          </a>
        </div>
        <nav>
          <ul>
            {/* <li className="one">
              <a href="/">Who I am</a>
            </li> */}
            <li className="two">
              <Link
                className="link-pionter"
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
              >
                Project
              </Link>
            </li>
            <li className="three">
              <Link
                className="link-pionter"
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
              >
                Résumé
              </Link>
            </li>
            <li className="four">
              <Link
                className="link-pionter"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </li>
            <li className="five">
              <Link
                className="link-pionter"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Trail>
  );
}
