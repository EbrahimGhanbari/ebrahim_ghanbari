import React, { useState, useEffect } from "react";
import { Trail, animated } from "react-spring/renderprops";
import "./TrailText.scss";

export default function (props) {
  //convert text to array
  let items = "";
  if (props.text) {
    items = props.text.split("");
  }

  let foo = [];
  items.forEach((item, index) => {
    foo = [...foo, { key: index, text: item }];
  });

  const [state, setState] = useState({
    toggle: props.toggle,
    items,
  });

  //control the hovering over "E"
  useEffect(() => {
    setState((state) => ({ ...state, toggle: props.toggle }));
  }, [props.toggle]);

  return (
    <Trail
      key="s"
      native
      reverse={state.toggle}
      initial={null}
      items={state.items}
      from={{ opacity: 0, x: 100 }}
      to={{ opacity: state.toggle ? 0 : 0.8, x: state.toggle ? 0 : 100 }}
    >
      {(item) => ({ x, opacity, index }) => (
        <animated.label
          className="box"
          key={`${item}-1`}
          style={{
            opacity,
            transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
          }}
        >
          {item}
        </animated.label>
      )}
    </Trail>
  );
}
