import React from "react";
import Transition from "../Animation/Transition";
import Trail from "../Animation/Trail";
import Skills from "./Skills";
import Educations from "./Educations";
import WorkExperience from "./WorkExperience";
import Courses from "./Courses";
import "./Resume.scss";

export default function (props) {
  return (
    <div>
      <Trail open={true} xValue={500}>
        <div className="resume">
          <h1>
            <div style={{ display: "flex", height: "60px" }}>
              <Transition text={"R.e.s.u.m.e"} />
            </div>
          </h1>
          <section>
            <div className="resume-left">
              <WorkExperience />
            </div>
            <div className="resume-right">
              <Educations />
            </div>
          </section>
          <Courses />
          <Skills />
          <a href="cv.pdf" target="_blank">
            <button id="download_resume" className="coolBeans">
              Download Resume
            </button>
          </a>
        </div>
      </Trail>
      <div id="resume_div"> </div>
    </div>
  );
}
