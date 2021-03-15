import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
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




const routing = (
    <div>
        <TopNavBar />
        <SideBar />
        <div className="index">
            <Description />
            <Projects />
            <Resume />
            <About />
            <Contact />
            <Footer />
        </div>
    </div>
);

ReactDOM.render(routing, document.getElementById('root'))


serviceWorker.unregister();
