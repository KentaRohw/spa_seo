import React from 'react';
import { Route } from 'react-router-dom';

import Kentatan from './Kentatan';
import Jyasukaw from './Jyasukaw';
  
const Author = () => (
  <div>
    <Route path='/entry/kentatan' component={Kentatan} />
    <Route path='/entry/jyasukaw' component={Jyasukaw} />
  </div>
)

export default Author;
