import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/AboutUs/AboutUs';

export default (
    <Switch>
        <Route component={Home} exact path='/' /> 
        <Route component={About} path='/about' /> 
    </Switch>
)