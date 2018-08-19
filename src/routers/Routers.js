import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cart from '../components/Cart';
import Itemlists from '../components/ItemLists';

const Routers = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Itemlists}/>
      <Route path='/cart' component={Cart}/>
    </Switch>
  </div>
)

export default Routers
