import React from 'react'
import {hashHistory, Redirect, Route, Router} from "react-router";

import Todo from "../todo/todo";
import About from '../about/about'

export default props => (
  <Router history={hashHistory}>
    <Route path='/todos' component={Todo}/>
    <Route path='/about' component={About}/>
    <Redirect from='*' to='/todos'/>
  </Router>
)