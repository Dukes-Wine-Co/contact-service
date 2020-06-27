import React, { Component } from "react";
import {hot} from 'react-hot-loader';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default hot(module)(Header);
