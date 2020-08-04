import React from 'react';
import { hot } from 'react-hot-loader';
import BaseComponent from '../static/BaseComponent';
import { createFormComponent } from '../../helpers/methods';
import { personFormArr } from '../../data/submission-schemas';
import { Form } from 'react-bootstrap';
import FormSubmissionButton from '../static/FormSubmissionButton';

class EventAttendee extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        const formComponent = createFormComponent(personFormArr, this.handleChange, this.state)

        return (
            <div className="EventAttendee">
                <h1>{this.props.title} Submission</h1>
                <Form onSubmit={this.handleSubmit}>
                    {formComponent}
                    <FormSubmissionButton/>
                </Form>
            </div>
        );
    }
}

export default hot(module)(EventAttendee);
