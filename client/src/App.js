import React, { useState } from 'react';
import handleViewport from "react-in-viewport";

import TopNavBar from './components/TopNavBar/TopNavBar';
import SideBar from './components/SideBar/SideBar';
import Description from './components/Description/Description';
import Projects from './components/Projects/Projects';
// import Resume from './components/Resume/Resume';
// import Contact from './components/Contact/Contact';
// import About from './components/About/About';
// import Footer from './components/Footer/Footer';
import Divider from "./components/Utilities/Divider";

const ViewportBlock = handleViewport(Divider /** options: {}, config: {} **/);

const MyComponents = {
  Divider: function () { return (<Divider height={"100vh"} />) },
  DescriptionBundle: function () {
    return (<>  <ViewportBlock
      height={"0vh"}
      onEnterViewport={() => console.log("index enter")}
      onLeaveViewport={() => console.log("index leave")}
    />
      <Description /></>)
  }
}

export default function (props) {
  const [display, setDisplay] = useState({});


  setTimeout(function () {
    setDisplay({ desc: true, topNavbar: true })
  }, 1000);



  return (
    <div>
      {display.topNavbar ? <TopNavBar /> : <MyComponents.Divider />}
      <div className="index">
        {display.desc ? <MyComponents.DescriptionBundle /> : <MyComponents.Divider />}
        {/* 
        <ViewportBlock
          height={"0.01vh"}
          onEnterViewport={() => console.log("project enter")}
          onLeaveViewport={() => console.log("Description leave")}
        /> */}
        {/* <Projects /> */}
        {/* <SideBar /> */}
        {/* <Resume />
        <ViewportBlock
            height={"0.01vh"}
            onEnterViewport={() => console.log("resume enter")}
            onLeaveViewport={() => console.log("resume leave")}
        />
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








