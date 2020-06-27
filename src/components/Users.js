import React, { Component } from "react";
import {hot} from 'react-hot-loader';

class Users extends Component{
    render(){
        return(
            <div className="Users">
                <h1> Users </h1>
            </div>
        );
    }
}

export default hot(module)(Users);
