import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, useParams, BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/pages/Home';
import EventAttendee from '../components/pages/EventAttendee';
import Event from '../components/pages/Event';
import Address from '../components/blocks/Address';
import Person from '../components/pages/Person';
import BulkSubmission from '../components/pages/BulkSubmission';
import TableDisplay from '../components/blocks/TableDisplay';
import PageHeader from '../components/static/PageHeader';

class RouteTree extends Component {
    render(){
        return(
            <div className="RouteTree">
                <Switch>
                    <Route path="/bulk-submission" key='bulk-submission'>
                        <BulkSubmission title="Bulk Submission" />
                    </Route>
                    <Route path="/event-attendee" key='event-attendee'>
                        <EventAttendee title="Event Attendee"/>
                    </Route>
                    <Route path="/event" key='event'>
                        <Event title="Event"/>
                    </Route>
                    <Route path="/address" key='address'>
                        <Address title="Address"/>
                    </Route>
                    <Route path="/person" key='person'>
                        <Person title="Person"/>
                    </Route>
                    <Route path="/display/:displayItem" key='table-diplay'>
                        <TableDisplay title="Table" location={location}/>
                    </Route>
                    <Route path="/" key='home'>
                        <Home title="Home"/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default hot(module)(RouteTree);
