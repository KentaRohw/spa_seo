import React from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Entrys from './Entrys';
  
const Main = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route exact path='/entry/kentatan/:id' component={Entrys} />
    <Route exact path='/entry/jyasukaw/:id' component={Entrys} />
    <Route exact path='/about' component={About} />
  </div>
)

export default Main;
