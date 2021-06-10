import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { GiChickenOven, GiOilPump } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";
import { AiOutlineSchedule } from "react-icons/ai";

import "./Card.scss";

export default function (props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const project = props.project;

  return (
    <div onClick={() => set((state) => !state)}>
      <animated.div
        className={`c back ${project.class}`}
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <GiOilPump
          className="icon_1"
          style={
            project.class === "project_1"
              ? { color: "#6e6e6dff" }
              : { display: "none" }
          }
        />
        <GiChickenOven
          className="icon_1"
          style={
            project.class === "project_2"
              ? { color: "#fad0c9ff" }
              : { display: "none" }
          }
        />
        <AiOutlineSchedule
          className="icon_1"
          style={
            project.class === "project_3"
              ? { color: "#adefd1ff" }
              : { display: "none" }
          }
        />
        <GrOptimize
          className="icon_1"
          style={
            project.class === "project_4"
              ? { color: "#00203fff" }
              : { display: "none" }
          }
        />
      </animated.div>
      <animated.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <section>
          <div className="card_title">{project.title}</div>
          <p>{project.description}</p>
          <div className="card_title">Tools and Environment:</div>
          <p>{project.env}</p>
        </section>
      </animated.div>
    </div>
  );
}
