import './polyfill';
import 'core-js/es';
import 'mutation-observer';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root'));
