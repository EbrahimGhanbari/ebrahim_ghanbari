import React, { useState } from "react";
import { Trail, animated } from "react-spring/renderprops";
import "./Animation.scss";

function Animation() {
  const [state, setState] = useState({
    toggle: true,
    items: ["item1", "item2", "item3", "item4", "item5"],
  });

  const toggle = () => {
    setState((state) => ({ ...state, toggle: !state.toggle }));
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Trail
        native
        reverse={state.toggle}
        initial={null}
        items={state.items}
        from={{ opacity: 0, x: -100 }}
        to={{ opacity: state.toggle ? 1 : 0.25, x: state.toggle ? 0 : 100 }}
      >
        {(item) => ({ x, opacity }) => (
          <animated.div
            className="box"
            onMouseEnter={toggle}
            onMouseleave={toggle}
            style={{
              opacity,
              transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
            }}
          >
            {item}
          </animated.div>
        )}
      </Trail>
    </div>
  );
}

export default Animation;
