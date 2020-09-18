import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import EventAttendee from '../pages/EventAttendee';
import Person from '../pages/Person';
import BulkSubmission from '../pages/BulkSubmission';
import Event from '../pages/Event';
import PageHeader from '../static/PageHeader';
import { formatTitleNames } from '../../helpers/generic-helper-methods';

const submissionClassMap = {
    'bulk-submission': BulkSubmission,
    'event-attendee': EventAttendee,
    'person': Person,
    'event': Event
};

class SubmissionDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const ComponentToDisplay = submissionClassMap[this.props.displayItem];

        return (
            <div>
                <div className="headerKey">
                    <PageHeader title={`${formatTitleNames(this.props.displayItem)} Submission`} />
                </div>
                <ComponentToDisplay title={this.props.displayItem}/>
            </div>
        );
    }
}

export default hot(module)(SubmissionDisplay);
