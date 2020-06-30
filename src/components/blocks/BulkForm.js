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
        this.handleSubmissionType = this.handleSubmissionType.bind(this);
        this.handleBulkChange = this.handleBulkChange.bind(this);
        this.handleSubmissionDataType = this.handleSubmissionDataType.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state);
    }

    handleSubmissionType(event){
        this.setState({submissionType: event.target.value});
    }

    handleBulkChange(event){
        this.setState({bulkValue: event.target.value});
        console.log(this.state)
    }

    handleSubmissionDataType(event){
        this.setState({submissionDataType: event.target.value})
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
            return <option value={type}>{type}</option>
        })

        const submissionTypes = ['File', 'Text'].map((type, ind) => {
            return <Form.Check
                type="radio"
                label={type}
                name="formHorizontalRadios"
                id={'formHorizontalRadios'-ind}
                onChange={this.handleSubmissionType}
                value={type}
            />
        });

        const submissionToRender = this.state.submissionType === 'Text' ?
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Bulk Submission Area</Form.Label>
                <Form.Control as="textarea" rows="8" value={this.state.bulkValue} onChange={this.handleBulkChange}/>
            </Form.Group> :
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Example file input"/>
            </Form.Group>;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlSelect1" onChange={this.handleSubmissionDataType}>
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default hot(module)(BulkForm);
