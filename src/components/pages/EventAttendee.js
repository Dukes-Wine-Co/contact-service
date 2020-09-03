import React from 'react';
import { hot } from 'react-hot-loader';
import BaseComponent from '../static/BaseComponent';
import { createFormComponent } from '../../helpers/component-helper-methods';
import { personFormArr } from '../../data/submission-schemas';
import { Form } from 'react-bootstrap';
import FormSubmissionButton from '../static/FormSubmissionButton';
import PageHeader from '../static/PageHeader';

class EventAttendee extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        const formComponent = createFormComponent(personFormArr, this.handleChange, this.state);

        return (
            <div className="EventAttendee">
                <div className="headerKey">
                    <PageHeader title={this.props.title + 'Submission'} />
                </div>
                <Form onSubmit={this.handleSubmit}>
                    {formComponent}
                    <FormSubmissionButton/>
                </Form>
            </div>
        );
    }
}

export default hot(module)(EventAttendee);
