import React, { Component } from "react";
import {hot} from 'react-hot-loader';

class Address extends Component {
    render(){
        return(
            <div className="Address">
                <h1> Submission for {this.props.title} </h1>
            </div>
        );
    }
}

export default hot(module)(Address);
