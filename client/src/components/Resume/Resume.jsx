import React from "react";
import "./Resume.scss";

export default function (props) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <section>
        <div className="resume-left">
          <div>
            <h2>Work Experience</h2>
            <h3>Empowered Pathways (WERC)</h3>
            <dl>
              <dt>Social Media Strategist (Internship)</dt>
              <dt>August 2016 – December 2016</dt>
            </dl>
            <h3>Empowered Pathways (WERC)</h3>
            <dl>
              <dt>Social Media Strategist (Internship)</dt>
              <dt>August 2016 – December 2016</dt>
            </dl>
          </div>
          <div>
            <h2>Skills</h2>
            <div className="two-column">
              <dl>
                <dt>Social Media </dt>
                <dt>August 2016</dt>
              </dl>
              <dl>
                <dt>Social Media</dt>
                <dt>August 2016</dt>
              </dl>
            </div>
          </div>
        </div>
        <div className="resume-right">
          <div>
            <h2>Work Experience</h2>
            <h3>Empowered Pathways (WERC)</h3>
            <dl>
              <dt>Social Media Strategist (Internship)</dt>
              <dt>August 2016 – December 2016</dt>
            </dl>
            <h3>Empowered Pathways (WERC)</h3>
            <dl>
              <dt>Social Media Strategist (Internship)</dt>
              <dt>August 2016 – December 2016</dt>
            </dl>
          </div>
          <div>
            <h2>Volunteering</h2>
            <h3>Empowered Pathways (WERC)</h3>
            <dl>
              <dt>Social Media Strategist (Internship)</dt>
              <dt>August 2016 – December 2016</dt>
            </dl>
            <h3>Empowered Pathways (WERC)</h3>
            <dl>
              <dt>Social Media Strategist (Internship)</dt>
              <dt>August 2016 – December 2016</dt>
            </dl>
          </div>
        </div>
      </section>

      <button>
        <a href="cv.pdf" target="_blank">
          Download Resume
        </a>
      </button>
    </div>
  );
}
