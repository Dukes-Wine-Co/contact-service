import React from 'react';
import { hot } from 'react-hot-loader';
import BaseComponent from '../static/BaseComponent';
import FormSubmissionButton from '../static/FormSubmissionButton';
import { addressFormArr, eventFormInfo } from '../../../data/submission-schemas';
import { createFormComponent } from '../../../helpers/component-helper-methods';
import { Form } from 'react-bootstrap';

class Event extends BaseComponent {
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
        const submissionTypes = [
            { type: 'Event Info', data: eventFormInfo },
            { type: 'Address', data: addressFormArr }
        ];

        const formComponent = submissionTypes
            .map(submissionType => {
                return (
                    <div>
                        <h2>{submissionType.type}</h2>
                        {createFormComponent(submissionType.data, this.handleChange, this.state)}
                    </div>
                );
            });

        return (
            <div className="Event">
                <h1>{this.props.title} Submission</h1>
                <Form onSubmit={this.handleSubmit}>
                    {formComponent}
                    <FormSubmissionButton/>
                </Form>
            </div>
        );
    }
}

export default hot(module)(Event);
