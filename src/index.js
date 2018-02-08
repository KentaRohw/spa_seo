import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';


const Root = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
