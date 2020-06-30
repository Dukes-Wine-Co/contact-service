import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { Switch, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import EventAttendee from '../components/pages/EventAttendee';
import Event from '../components/pages/Event';
import Address from '../components/pages/Address';
import Person from '../components/pages/Person';
import BulkSubmission from '../components/pages/BulkSubmission';

class RouteTree extends Component{
    render(){
        return(
            <div className="RouteTree">
                <Switch>
                    <Route path="/bulk-submission">
                        <BulkSubmission title="Bulk Submission" />
                    </Route>
                    <Route path="/event-attendee">
                        <EventAttendee title="Event Attendee"/>
                    </Route>
                    <Route path="/event">
                        <Event title="Event"/>
                    </Route>
                    <Route path="/address">
                        <Address title="Address"/>
                    </Route>
                    <Route path="/person" >
                        <Person title="Person"/>
                    </Route>
                    <Route path="/">
                        <Home title="Home"/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default hot(module)(RouteTree);
