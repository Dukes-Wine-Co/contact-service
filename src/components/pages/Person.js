import React from 'react';
import { hot } from 'react-hot-loader';
import BaseComponent from '../static/BaseComponent';
import { createFormComponent } from '../../helpers/component-helper-methods';
import { Form } from 'react-bootstrap';
import { addressFormArr, personFormArr } from '../../data/submission-schemas';
import FormSubmissionButton from '../static/FormSubmissionButton';
import axios from 'axios';
import { API_URL } from '../../config/app-config';
import { flattenObject } from '../../helpers/generic-helper-methods';

class Person extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            eventTitles: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.get(`${API_URL}/event`)
            .then(info => {
                const flattenEveryDBObj = info
                    .data
                    .map(dbObj => flattenObject(dbObj))
                    .map(dbObj => ({ abbreviation: dbObj.title }));

                this.setState({ eventTitles: flattenEveryDBObj });
            });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        const asyncEntry = {
            keyName: 'eventsAttended',
            label: 'Events Attended',
            data: this.state.eventTitles,
            type: 'select',
            multiple: true
        };

        const submissionTypes = [
            { type: 'Contact Info', data: [...personFormArr, ...[asyncEntry]] },
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
            <div className="Person">
                <Form onSubmit={this.handleSubmit}>
                    {formComponent}
                    <FormSubmissionButton/>
                </Form>
            </div>
        );
    }
}

export default hot(module)(Person);
