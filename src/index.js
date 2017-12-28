import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';


const Root = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
