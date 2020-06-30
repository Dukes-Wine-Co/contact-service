import React, { Component } from "react";
import {hot} from 'react-hot-loader';

class Event extends Component{
    render(){
        return(
            <div className="Event">
                <h1> Submission for {this.props.title} </h1>
            </div>
        );
    }
}

export default hot(module)(Event);
