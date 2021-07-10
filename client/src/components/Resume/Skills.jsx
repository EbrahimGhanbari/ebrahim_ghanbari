import React from "react";

import "./Skills.scss";

export default function () {
  return (
    <div>
      <h2 className="resume_subtitle">Skills</h2>
      <div className="skills">
        <dl>
          <dt>Javascript</dt>
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
      {/* <div className="skills">
        <dl>
          <dt>Javascript</dt>
          <dt>ReactJS </dt>
          <dt>Javascript </dt>
          <dt>Node JS </dt>
        </dl>
        <dl>
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
      </div> */}
    </div>
  );
}
