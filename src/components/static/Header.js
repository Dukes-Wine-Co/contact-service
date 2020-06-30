import React, { Component } from "react";
import {hot} from 'react-hot-loader';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <Nav justify variant="tabs" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="events"><Link to="/event">Events</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="event-attendee"><Link to="/event-attendee">Event Attendees</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="person"><Link to="/person">Person</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="address"><Link to="/address">Address</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="bulk-submission"><Link to="/bulk-submission">Bulk Submission</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default hot(module)(Header);
