import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// styles
import './index.scss';

// components
// import App from './App';

import TopNavBar from './components/TopNavBar';
import Description from './components/Description/Description';
import Projects from './components/Projects/Projects';
// import TrailText from './components/Animation/TrailText';




const routing = (
    <div >
        <TopNavBar />
        <Description />
        <Projects />
        {/* <TrailText /> */}
    </div>
);

ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
