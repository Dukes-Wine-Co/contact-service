import React from 'react';
import { hot } from 'react-hot-loader';
import BaseComponent from '../static/BaseComponent';
import { createFormComponent } from '../../helpers/component-helper-methods';
import { Form } from 'react-bootstrap';
import { addressFormArr, personFormArr } from '../../data/submission-schemas';
import FormSubmissionButton from '../static/FormSubmissionButton';
import PageHeader from '../static/PageHeader';

class Person extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        const submissionTypes = [
            { type: 'Contact Info', data: personFormArr },
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

export default hot(module)(Person);
