import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";

import TopNavBar from "./components/TopNavBar/TopNavBar";
import Description from "./components/Description/Description";
import Projects from "./components/Projects/Projects";
// import SideBar from './components/SideBar/SideBar';
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Divider from "./components/Utilities/Divider";

const ViewportBlock = handleViewport(Divider);
const DividerBlock = function ({ func = function () {}, height }) {
  return (
    <ViewportBlock
      height={height}
      onEnterViewport={() => {
        func();
      }}
      onLeaveViewport={() => {}}
    />
  );
};

export default function (props) {
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
      {display.topNavbar ? <TopNavBar /> : <DividerBlock height={"100vh"} />}
      <div className="index">
        {/* {display.desc ? (
          <>
            <Description /> <DividerBlock height={"60vh"} />
          </>
        ) : (
          <DividerBlock height={"100vh"} />
        )}
        {display.project ? (
          <>
            <Projects /> <DividerBlock height={"120vh"} />
          </>
        ) : (
          <div id="project">
            <DividerBlock height={"60vh"} />
            <DividerBlock height={"100vh"} func={showProject} />
          </div>
        )}
        {display.resume ? (
          <>
            <Resume /> <DividerBlock height={"170vh"} />
          </>
        ) : (
          <div id="resume">
            <DividerBlock height={"60vh"} />
            <DividerBlock height={"100vh"} func={showResume} />
          </div>
        )}
        {display.about ? (
          <>
            <About /> <DividerBlock height={"120vh"} />
          </>
        ) : (
          <div id="about">
            <DividerBlock height={"60vh"} />
            <DividerBlock height={"100vh"} func={showAbout} />
          </div>
        )} */}
        <Contact />
        <DividerBlock height={"120vh"} />
        <Footer />

        {/* <SideBar /> */}
      </div>
    </div>
  );
}
