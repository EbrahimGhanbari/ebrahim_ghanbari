import React, { useState, useEffect } from 'react';
import handleViewport from "react-in-viewport";

import TopNavBar from './components/TopNavBar/TopNavBar';
import Description from './components/Description/Description';
import Projects from './components/Projects/Projects';
// import SideBar from './components/SideBar/SideBar';
import Resume from './components/Resume/Resume';
// import Contact from './components/Contact/Contact';
// import About from './components/About/About';
// import Footer from './components/Footer/Footer';
import Divider from "./components/Utilities/Divider";

const ViewportBlock = handleViewport(Divider);

const MyComponents = {
  Divider: function ({ func = function () { }, height }) {
    return (<ViewportBlock
      height={height}
      onEnterViewport={() => { func() }}
      onLeaveViewport={() => { }}
    />)
  },
  DescriptionBundle: function () {
    return (<>
      <Description />
    </>)
  },
  ProjectBundle: function () {
    return (
      <>
        <Projects />
      </>)
  }

}

export default function (props) {
  const [display, setDisplay] = useState({});
  const time = 1500;

  useEffect(() => {
    setTimeout(function () {
      setDisplay({ desc: true, topNavbar: true })
    }, time);
  }, [])

  function showProject() {
    setDisplay({ ...display, project: true });
  }

  function showResume() {
    setDisplay({ ...display, resume: true });
  }

  return (
    <div>
      {display.topNavbar ? <TopNavBar /> : <MyComponents.Divider height={"100vh"} />}
      <div className="index">
        {display.desc ? <><Description /> <MyComponents.Divider height={"60vh"} /> </>
          : <MyComponents.Divider height={"100vh"} />}
        {display.project ? <><Projects /> <MyComponents.Divider height={"120vh"} /> </> : <> <MyComponents.Divider height={"60vh"} /> <MyComponents.Divider height={"100vh"} func={showProject} /> </>}
        {display.resume ? <Resume /> : <> <MyComponents.Divider height={"60vh"} /> <MyComponents.Divider height={"100vh"} func={showResume} /> </>}

        {/* <SideBar /> */}
        {/* 
        <About />
        <ViewportBlock
            height={"0.01vh"}
            onEnterViewport={() => console.log("about enter")}
            onLeaveViewport={() => console.log("about leave")}
        />
        <Contact />
        <ViewportBlock
            height={"0.01vh"}
            onEnterViewport={() => console.log("contact enter")}
            onLeaveViewport={() => console.log("contact leave")}
        />
        <Footer /> */}
      </div>
    </div>
  );

}








