import React, { Component } from "react";
import {hot} from 'react-hot-loader';

class Person extends Component{
    render(){
        return(
            <div className="Person">
                <h1> Submission for {this.props.title} </h1>
            </div>
        );
    }
}

export default hot(module)(Person);
