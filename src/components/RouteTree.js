import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Users from './Users';
import Home from './Home';

class RouteTree extends Component{
    render(){
        return(
            <div className="RouteTree">
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default hot(module)(RouteTree);
