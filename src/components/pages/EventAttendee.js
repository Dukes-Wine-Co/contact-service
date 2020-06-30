import React, { Component } from "react";
import {hot} from 'react-hot-loader';

class EventAttendee extends Component{
    render(){
        return(
            <div className="EventAttendee">
                <h1> Submission for {this.props.title} </h1>
            </div>
        );
    }
}

export default hot(module)(EventAttendee);
