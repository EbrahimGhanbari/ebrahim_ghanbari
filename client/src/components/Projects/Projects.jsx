import React from "react";
import handleViewport from "react-in-viewport";
import Divider from "../Utilities/Divider";
import Card from "../Animation/Card";
import "./Projects.scss";

const ViewportBlock = handleViewport(Divider /** options: {}, config: {} **/);
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
    <div>
      {/* <div>
        <ViewportBlock
          height={"0.01vh"}
          onEnterViewport={() => console.log("project enter")}
          onLeaveViewport={() => console.log("project leave")}
        />
      </div> */}
      <div id="project">
        <h1>Selected Works</h1>
        <div className="project">
          {/* <div className="box project_1">
            <img src="cnergreen.png" alt="Italian Trulli" />
            <h2 className="box_text">TEXT TEXT</h2>
          </div>
          <div className="box project_2">
            <img src="cnergreen.png" alt="Italian Trulli" />
            <h2 className="box_text">TEXT TEXT</h2>
          </div>
          <div className="box project_2">
            <img src="cnergreen.png" alt="Italian Trulli" />
            <h2 className="box_text">TEXT TEXT</h2>
          </div> */}
          <div className="box">
            <Card project={projects.cnergreen} />
          </div>
          <div className="box">
            <Card project={projects.wing} />
          </div>
          <div className="box">
            <Card project={projects.interview} />
          </div>
          <div className="box">
            <Card project={projects.jungle} />
          </div>
        </div>
      </div>
    </div>
  );
}
