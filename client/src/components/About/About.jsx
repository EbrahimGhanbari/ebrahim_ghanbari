import React from "react";
import Stack from "../Animation/Stack";
import Transition from "../Animation/Transition";
import Trail from "../Animation/Trail";

import "./About.scss";

export default function (props) {
  return (
    <div>
      <Trail open={true} xValue={500}>
        <div>
          <div id="about" className="about">
            <div className="about_text">
              <h1>
                <div style={{ display: "flex", height: "80px" }}>
                  <Transition text={"A.b.o.u.t m.e"} />
                </div>
              </h1>
              <h2>Who am I?</h2>
              <p>
                My name is Ebrahim Ghanbari, and I am a software developer based
                in Canada.
              </p>
              <h2>How did I draw into coding?</h2>
              <p>
                I started my professional career as a Data Analyst at
                Weatherford instrumentation group. love being challenged. With
                pandemic and lockdown, I saw it as a good opportunity to improve
                my programming skills through Lighthouse Lab Web Development
                bootcamp. Working and studying full time was a real challenge
                but I really enjoyed taking my programming skills to the next
                level. Through bootcamp and self-learning, I have developed
                intimate knowledge of Node.js, React and Test-Driven Development
                practice.
              </p>
              <h2>What am I passionate about?</h2>
              <p></p>
              <h2>About this website?</h2>
              <p>
                The website was built and designed by myself. For the backend I
                have used Express and MongoDB and Front-End is designed using
                React. I am hosting this website using a 10+ years old laptop.
                So if it crashed while you are reading this, my apologies 😀.
              </p>
              <h2>What else?</h2>
              <p>Also, Kermit and Grover are my favorite puppets.</p>
            </div>
            {/* <Stack /> */}
          </div>
        </div>
      </Trail>
      <div id="about_div"> </div>
    </div>
  );
}
