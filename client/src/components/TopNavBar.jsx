import React, { useState } from "react";

import TrailText from "./Animation/TrailText";
import Trail from "./Animation/Trail";

import "./TopNavBar.scss";

function TopNavBar(props) {
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
            <a href="#">Who I am</a>
          </li>
          <li class="two">
            <a href="#"> Résumé</a>
          </li>
          <li class="three">
            <a href="#">Project</a>
          </li>
          <li class="four">
            <a href="#">About</a>
          </li>
          <li class="five">
            <a href="#">Contact</a>
          </li>
          <hr />
        </ul>
      </div>
    </div>
    </Trail>
  );
}

export default TopNavBar;
