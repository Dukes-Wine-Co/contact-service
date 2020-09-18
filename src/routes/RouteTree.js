import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, useParams, BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/pages/Home';
import EventAttendee from '../components/pages/EventAttendee';
import Event from '../components/pages/Event';
import Address from '../components/blocks/Address';
import Person from '../components/pages/Person';
import BulkSubmission from '../components/pages/BulkSubmission';
import SubmissionDisplay from '../components/blocks/SubmissionDisplay';
import TableDisplay from '../components/blocks/TableDisplay';
import PageHeader from '../components/static/PageHeader';
import { getDisplayItemFromPath } from '../helpers/generic-helper-methods';

class RouteTree extends Component {
    render(){
        return(
            <div className="RouteTree">
                <Switch>
                    <Route path="/display/:displayItem" key='table-diplay'>
                        <TableDisplay
                            title="Table"
                            location={location}
                            displayItem={getDisplayItemFromPath(location.pathname)}
                        />
                    </Route>
                    <Route path="/submit/:submitItem" key='submit-display'>
                        <SubmissionDisplay
                            location={location}
                            displayItem={getDisplayItemFromPath(location.pathname)}
                        />
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
