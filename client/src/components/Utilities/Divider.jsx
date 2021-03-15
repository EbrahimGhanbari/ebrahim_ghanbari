import React from "react";

export default function (props) {
  const height = { height: props.height };
  return (
    <div style={height} className="divider" ref={props.forwardedRef}></div>
  );
}
