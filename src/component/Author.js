import React from 'react';
import { Route } from 'react-router-dom';

import Kentatan from './Kentatan';
import Jyasukaw from './Jyasukaw';
import Iyamasat from './Iyamasat';
  
const Author = () => (
  <div>
    <Route path='/entry/kentatan' component={Kentatan} />
    <Route path='/entry/jyasukaw' component={Jyasukaw} />
    <Route path='/entry/iyamasat' component={Iyamasat} />
  </div>
)

export default Author;
