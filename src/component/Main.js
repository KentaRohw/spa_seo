import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Entrys from './Entrys';
import NotFound from './NotFound';
  
const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/entry/kentatan/:id' component={Entrys} />
      <Route exact path='/entry/jyasukaw/:id' component={Entrys} />
      <Route exact path='/entry/iyamasat/:id' component={Entrys} />
      <Route exact path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Main;
