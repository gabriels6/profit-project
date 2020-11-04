import React from 'react'
import Home from './Home'
import Engine from './Engine'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const SwitchControl = () =>{

    return(
        <Switch>
            <Route path = "/Home">
                <Home></Home>
            </Route>
            <Route path = "/Engine">
                <Engine></Engine>
            </Route>
            <Route path = "/AboutUs">
                About Us
            </Route>
        </Switch>
    )
}

export default SwitchControl;