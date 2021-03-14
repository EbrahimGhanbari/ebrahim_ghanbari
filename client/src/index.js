import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// styles
import './index.scss';


import TopNavBar from './components/TopNavBar';
import Description from './components/Description/Description';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';




const routing = (
    <div className="index">
        <TopNavBar />
        <Description />
        <Projects />
        <Resume />
        <About />
        <Contact />

        <Footer />
    </div>
);

ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
