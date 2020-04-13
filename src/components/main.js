import React from 'react'
import LandingPage from './landingpage'
import Contact from './contact'
import About from './aboutme'
import Project from './project'
import Resume from './resume'

import {Switch, Route} from 'react-router-dom'

const Main =()=>{
    return(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route  path="/contact" component={Contact}/>
        <Route  path="/aboutme" component={About}/>
        <Route  path="/project" component={Project}/>
        <Route  path="/resume" component={Resume}/>
    </Switch>
    )
}

export default Main