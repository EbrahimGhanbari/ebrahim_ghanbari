import React from 'react';
import ReactDOM from 'react-dom';
import handleViewport from "react-in-viewport";
import * as serviceWorker from './serviceWorker';

// styles
import './index.scss';

import TopNavBar from './components/TopNavBar/TopNavBar';
import SideBar from './components/SideBar/SideBar';
import Description from './components/Description/Description';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Divider from "./components/Utilities/Divider";

const ViewportBlock = handleViewport(Divider /** options: {}, config: {} **/);

const routing = (
    <div>

        <TopNavBar />
        <SideBar />
        <div className="index">
            <ViewportBlock
                height={"0.01vh"}
                onEnterViewport={() => console.log("index enter")}
                onLeaveViewport={() => console.log("index leave")}
            />
            <Description />
            <ViewportBlock
                height={"0.01vh"}
                onEnterViewport={() => console.log("project enter")}
                onLeaveViewport={() => console.log("Description leave")}
            />
            <Projects />
            <Resume />
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
            <Footer />
        </div>
    </div>
);

ReactDOM.render(routing, document.getElementById('root'))


serviceWorker.unregister();
