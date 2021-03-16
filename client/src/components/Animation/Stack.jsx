import React from "react";
import { useSpring, animated } from "react-spring";
import range from "lodash-es/range";
import "./Stack.scss";

const items = range(4);
const pictures = [
  "bike_1_N.jpg",
  "bike_2_N.jpg",
  "bike_3_N.jpg",
  "bike_4_N.jpg",
];
const interp = (i) => (r) =>
  `translate3d(0, ${5 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

export default function () {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });
  return (
    <div className="stack">
      {items.map((i) => (
        <div>
          <animated.div
            key={i}
            className="script-bf-box"
            style={{ transform: radians.interpolate(interp(i)) }}
          >
            <img src={pictures[i]} alt="Italian Trulli"></img>
          </animated.div>
        </div>
      ))}
    </div>
  );
}
