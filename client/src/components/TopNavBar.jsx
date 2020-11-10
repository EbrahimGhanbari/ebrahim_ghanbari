import React from "react";

import "./TopNavBar.scss";

function TopNavBar(props) {
  return (
    <div className="top_nav">
      <div className="top_nav_left">
      <div className="logo"> </div>
      <div>ghanbari@ualberta.ca</div>
      </div>
      <div className="menu">
        <div>Project</div>
        <div>Résumé</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default TopNavBar;
