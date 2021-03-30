import React, { useState, useEffect } from "react";
import MobileNavBar from "./MobileNavBar";
import LaptopNavBar from "./LaptopNavBar";

export default function (props) {
  const [windowSize, setWindowSize] = useState(
    document.documentElement.clientWidth
  );
  useEffect(() => {
    setWindowSize(document.documentElement.clientWidth);
  }, [document.documentElement.clientWidth]);
  console.log(windowSize);
  return windowSize <= 539 ? <MobileNavBar /> : <LaptopNavBar />;
}
