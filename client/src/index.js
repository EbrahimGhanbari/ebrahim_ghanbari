import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// styles
import './index.scss';

import App from "./App";

const routing = (
    <App />

);

ReactDOM.render(routing, document.getElementById('root'))


serviceWorker.unregister();
