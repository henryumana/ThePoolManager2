import React from 'react'
import {render} from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';




render(<App />, document.getElementById('root'));
registerServiceWorker();
