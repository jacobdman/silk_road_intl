import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import CaseStudies from './Components/CaseStudies/CaseStudies'

export default (
    <Switch>
        <Route component={Home} exact path='/' /> 
        <Route component={About} path='/about' /> 
        <Route component={Contact} path='/contact' /> 
        <Route component={CaseStudies} path='/casestudies' /> 
    </Switch>
)