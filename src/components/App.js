import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../style/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import RouteTree from './RouteTree';

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Header />
                    <RouteTree />
                </div>
            </Router>
        );
    }
}

export default hot(module)(App);
