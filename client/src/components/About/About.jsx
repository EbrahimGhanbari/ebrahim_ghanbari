import React from "react";
import Stack from "../Animation/Stack";
import Transition from "../Animation/Transition";

import "./About.scss";

export default function (props) {
  return (
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
            My name is Marco Cornacchia, and I am a Product Designer and Visual
            Developer based in NY. I have a B.A. in Psychology, a M.S. in
            Information Design and a background in Front-End Development.
          </p>
          <h2>What do I do?</h2>
          <p>
            I combine research, user flows, wireframing, prototyping,
            storytelling, and visual design & development to transform tricky
            problems into engaging solutions. With a background in Front-End
            Development, I understand the constraints of the web and am able to
            design and build around them effectively.
          </p>
          <h2>What am I passionate about?</h2>
          <p>
            As a No-Code enthusiast, I believe that lowering the barrier of
            entry into development will empower more people to create beautiful
            experiences Because of this, I am always on the lookout for No-Code
            solutions (like Webflow—which this site is entirely built on) that
            help everyone work faster and place the focus on the design,
            accessibility, and execution of products. I am also extremely
            passionate about bridging the gap between designers & developers in
            order to create the best possible products. But most importantly, I
            love working with diverse people who want to make the a little
            better before we’re all DEAD
          </p>
        </div>
        <Stack />
      </div>
    </div>
  );
}
