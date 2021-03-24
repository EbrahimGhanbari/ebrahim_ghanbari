import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";

import TopNavBar from "./components/TopNavBar/TopNavBar";
import Description from "./components/Description/Description";
import Projects from "./components/Projects/Projects";
import SideBar from "./components/SideBar/SideBar";
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

const DESCRIPTION = "description";
const PROJECT = "project";
const RESUME = "resume";
const ABOUT = "about";
const CONTACT = "contact";

export default function (props) {
  const [display, setDisplay] = useState({});
  const [tracker, setTracker] = useState(DESCRIPTION);
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
  function trackerUpdate(item) {
    console.log(item);
    setTracker(item);
  }

  return (
    <div>
      {/* <SideBar tracker={tracker} /> */}
      {display.topNavbar ? <TopNavBar /> : <DividerBlock height={"100vh"} />}
      <div className="index">
        {display.desc ? (
          <>
            <DividerBlock
              // onEnterViewport={(e) => trackerUpdate(DESCRIPTION)}
              height={"0.1vh"}
            />
            <Description />
            <DividerBlock height={"60vh"} />
          </>
        ) : (
          <DividerBlock height={"100vh"} />
        )}
        {display.project ? (
          <>
            <DividerBlock height={"30vh"} />
            <DividerBlock
              // onEnterViewport={(e) => trackerUpdate(PROJECT)}
              height={"0vh"}
            />
            <Projects />
            <DividerBlock height={"120vh"} />
          </>
        ) : (
          <div id="project">
            <DividerBlock height={"60vh"} />
            <DividerBlock height={"100vh"} onEnterViewport={showProject} />
          </div>
        )}

        {display.resume ? (
          <>
            <DividerBlock height={"30vh"} />
            <DividerBlock
              // onEnterViewport={(e) => trackerUpdate(RESUME)}
              height={"0vh"}
            />
            <Resume />
            <DividerBlock height={"170vh"} />
          </>
        ) : (
          <div id="resume">
            <DividerBlock height={"60vh"} />
            <DividerBlock height={"100vh"} onEnterViewport={showResume} />
          </div>
        )}
        {display.about ? (
          <>
            <DividerBlock height={"30vh"} />
            <DividerBlock
              height={"0vh"}
              // onEnterViewport={() => trackerUpdate(ABOUT)}
            />
            <DividerBlock height={"1vh"} />
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

        <Footer />
      </div>
    </div>
  );
}
