import React from "react";
import Transition from "../Animation/Transition";
import Trail from "../Animation/Trail";

import "./Resume.scss";

export default function (props) {
  return (
    <Trail open={true} xValue={500}>
      <div className="resume">
        <h1>
          <div style={{ display: "flex", height: "80px" }}>
            <Transition text={"R.e.s.u.m.e"} />
          </div>
        </h1>
        <section>
          <div className="resume-left">
            <div>
              <h2 className="resume_subtitle">Work Experience</h2>

              <h2>Web Development Mentor - Part Time</h2>
              <dl>
                <dt>Lighthouse Labs</dt>
                <dt>September 2020 – January 2021</dt>
              </dl>
              <h2>Application Specialist </h2>
              <dl>
                <dt>Weatherford Canada Ltd.</dt>
                <dt>Oct 2014 - Present</dt>
              </dl>
            </div>
            <div>
              <h2 className="resume_subtitle">Skills</h2>
              <div className="two-column">
                <dl>
                  <dt>ReactJS </dt>
                  <dt>Javascript </dt>
                  <dt>Node JS </dt>
                  <dt>Test Driven Development </dt>
                  <dt>NOSQL: Firebase </dt>
                </dl>
                <dl>
                  <dt>Ruby on Rails</dt>
                  <dt>Sass</dt>
                  <dt>Bootstrap</dt>
                  <dt>Python</dt>
                  <dt>SQL: Postgres, MySQL</dt>
                </dl>
              </div>
            </div>
          </div>
          <div className="resume-right">
            <div>
              <h2 className="resume_subtitle">Education</h2>
              <h2>Diploma • Web Development</h2>
              <dl>
                <dt>Lighthouse Labs</dt>
                <dt>2020</dt>
              </dl>
              <h2>Msc. • Petroleum Engineering</h2>
              <dl>
                <dt>University of Alberta</dt>
                <dt> 2012 - 2014</dt>
              </dl>
              <h2>Bsc. • Petroleum Engineering</h2>
              <dl>
                <dt>Amirkabir University of Technology</dt>
                <dt> 2007 - 2011</dt>
              </dl>
            </div>
          </div>
        </section>
        <a href="cv.pdf" target="_blank">
          <button className="coolBeans">Download Resume</button>
        </a>
      </div>
    </Trail>
  );
}
