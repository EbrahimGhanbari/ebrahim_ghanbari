import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";

import TopNavBar from "./components/TopNavBar/TopNavBar";
import Description from "./components/Description/Description";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Divider from "./components/Utilities/Divider";

const ViewportBlock = handleViewport(Divider);
const DividerBlock = function ({ onEnterViewport = function () {}, height }) {
  return (
    <ViewportBlock
      height={height}
      onEnterViewport={() => {
        onEnterViewport();
      }}
      onLeaveViewport={() => {}}
    />
  );
};

export default function () {
  const windowSize = document.documentElement.clientWidth;
  const spaceDescProject = windowSize < 850 ? "120vh" : "60vh";
  const spaceResumeAbout = windowSize < 850 ? "150vh" : "80vh";
  const [display, setDisplay] = useState({});
  const time = 1500;

  useEffect(() => {
    setTimeout(function () {
      setDisplay({ desc: true, topNavbar: true });
    }, time);
  }, []);

  function showProject() {
    setDisplay({ ...display, project: true });
  }

  function showResume() {
    setDisplay({ ...display, resume: true });
  }

  function showAbout() {
    setDisplay({ ...display, about: true });
  }

  return (
    <div>
      <div className="index">
        {/* {display.topNavbar ? <TopNavBar /> : <DividerBlock height={"100vh"} />}
        {display.desc ? (
          <>
            <Description />
            <DividerBlock height={spaceDescProject} />
          </>
        ) : (
          <DividerBlock height={"100vh"} />
        )}
        {display.project ? (
          <>
            <Projects />
          </>
        ) : (
          <div id="project">
            <DividerBlock height={"60vh"} />
            <DividerBlock height={"100vh"} onEnterViewport={showProject} />
          </div>
        )}

        {display.resume ? (
          <> */}
        <Resume />
        {/* <DividerBlock height={spaceResumeAbout} />
          </>
        ) : (
          <div id="resume">
            <DividerBlock height={"60vh"} />
            <DividerBlock height={"100vh"} onEnterViewport={showResume} />
          </div>
        )}
        {display.about ? (
          <>
            <About />
            <DividerBlock height={"120vh"} />
          </>
        ) : (
          <div id="about">
            <DividerBlock height={"60vh"} />
            <DividerBlock height={"100vh"} onEnterViewport={showAbout} />
          </div>
        )}

        <Contact />
        <DividerBlock height={"120vh"} />

        <Footer /> */}
      </div>
    </div>
  );
}
