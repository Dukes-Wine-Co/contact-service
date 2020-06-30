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
                        <Nav.Link eventKey="home" href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="events" href="/event">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="event-attendee" href="/event-attendee">Event Attendees</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="person" href="/person">Person</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="address" href="/address">Address</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="bulk-submission" href="/bulk-submission">Bulk Submission</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default hot(module)(Header);
