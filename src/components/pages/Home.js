import React, { Component } from "react";
import {hot} from 'react-hot-loader';

class App extends Component{
    render(){
        return(
            <div className="Home">
                <h1> Submission for {this.props.title} </h1>
            </div>
        );
    }
}

export default hot(module)(App);
