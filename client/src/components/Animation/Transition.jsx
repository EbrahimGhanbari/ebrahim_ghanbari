import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

export default function (props) {
  const text = props.text.split(".");

  let foo = [];
  text.forEach((item, index) => {
    foo = [...foo, { key: index, text: item }];
  });

  console.log(foo);
  const [items, setList] = useState({});

  setTimeout(() => {
    setList(foo);
  }, 2000);

  const transitions = useTransition(items, (item) => item.key, {
    from: { transform: "translate3d(0,-4000px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    trail: 150,
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      {item.text}
    </animated.div>
  ));
}