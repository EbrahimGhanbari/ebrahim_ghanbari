import React from "react";
import Transition from "../Animation/Transition";
import Card from "../Animation/Card";
import Trail from "../Animation/Trail";

import "./Projects.scss";

const projects = {
  cnergreen: {
    class: "project_1",
    title: "cnergreen.ca",
    description: "Single page business website for a startup",
    env: "React | Express | Node.js | PostgreSQL | Bootstrap | Sass",
    link: "www.cnergreen.ca",
  },
  wing: {
    class: "project_2",
    title: "Winged-it",
    description:
      "Single page cooking app that helps users decide what to cook using different APIs",
    env: "Firebase | React | Storybook | Framer Motion | Bootstrap | Sass",
    link: "",
    icon: "GiChickenOven",
  },
  interview: {
    class: "project_3",
    title: "Interview Scheduler",
    description: "An app that allows users to book and cancel interviews",
    env:
      "Express | Node.js | React | Storybook | Jest | Cypress | PostgreSQL | Bootstrap | Sass",
    link: "",
  },

  jungle: {
    class: "project_4",
    title: "Jungle",
    description: "An E-commerce app for buying and selling",
    env: "Ruby on Rails | RSpec | Capybara | PostgreSQL | Bootstrap | Sas",
    link: "",
  },
};

export default function (props) {
  return (
    <Trail open={true} xValue={500}>
      <div>
        <div id="project">
          <h1>
            <div style={{ display: "flex", height: "80px" }}>
              <Transition text={"S.e.l.e.c.t.e.d W.o.r.k.s"} />
            </div>
          </h1>
          <div className="project">
            <div className="box_container">
              <div className="box">
                <Card project={projects.cnergreen} />
              </div>
              <div className="box">
                <Card project={projects.wing} />
              </div>
            </div>
            <div className="box_container">
              <div className="box">
                <Card project={projects.interview} />
              </div>
              <div className="box">
                <Card project={projects.jungle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Trail>
  );
}
