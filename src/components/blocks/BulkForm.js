import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class BulkForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submissionType: 'Text',
            bulkValue: '',
            submissionDataType: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state);
        event.preventDefault();
    }

    render() {
        const bulkSubmissionDataTypes = [
            'Address',
            'Event',
            'Event Attendee',
            'Person'
        ]

        const submissionOptions = bulkSubmissionDataTypes.map(type => {
            return <option value={type} key={type} name="submissionDataType">{type}</option>
        })

        const submissionTypes = ['File', 'Text'].map((type, ind) => {
            return <Form.Check
                type="radio"
                key={type}
                label={type}
                name="submissionType"
                id={'formHorizontalRadios' - ind}
                onChange={this.handleChange}
                value={type}
            />
        });

        const submissionToRender = this.state.submissionType === 'Text' ?
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Bulk Submission Area</Form.Label>
                <Form.Control as="textarea" rows="8" value={this.state.bulkValue} name="bulkValue" onChange={this.handleChange}/>
            </Form.Group> :
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Example file input"/>
            </Form.Group>;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlSelect1" onChange={this.handleChange}>
                    <Form.Label>Submission Data Type</Form.Label>
                    <Form.Control as="select">
                        {submissionOptions}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Submission Type</Form.Label>
                    <Col>{submissionTypes}</Col>
                </Form.Group>

                {submissionToRender}

                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        );
    }
}

export default hot(module)(BulkForm);
