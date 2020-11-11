import React, { useState } from "react";
import { useSpring, animated } from 'react-spring'

import "./TopNavBar.scss";

function TopNavBar(props) {
  const [name, setName] = useState("E");

  return (
    <div className="top_nav">
      <div className="top_nav_left">
        <div className="logo">
          <div
            onMouseEnter={() => setName("Ebrahim Ghanbari")}
            onMouseLeave={() => setName("E")}
          >
            {name}
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
  );
}

export default TopNavBar;


