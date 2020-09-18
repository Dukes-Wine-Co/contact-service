import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormSubmissionButton from '../static/FormSubmissionButton';
import { csvToObj } from '../../helpers/csv-to-obj';
import DismissableAlert from '../static/Alert';
import axios from 'axios';
import { API_URL, DWC_API_KEY } from '../../config/app-config';
import { flattenObject } from '../../helpers/generic-helper-methods';

const bulkSubmissionDataTypes = [
    'Address',
    'Event',
    'Person'
];

class BulkForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submissionType: 'Text',
            bulkValue: '',
            submissionDataType: undefined,
            file: '',
            showAlert: false,
            alertDisplayMessage: '',
            alertVariant: 'primary'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadCSV = this.uploadCSV.bind(this);
        this.toggleAlert = this.toggleAlert.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    uploadCSV(e) {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                bulkValue: reader.result
            });
        };
        reader.readAsText(file);
    }

    submitForm(){
        if (this.state.submissionDataType){
            const submissionBody = {
                dataType: this.state.submissionDataType,
                requestData: this.state.bulkValue
            };

            axios({
                    method: 'post',
                    url: `${API_URL}/bulk`,
                    headers: { 'dwc-token': DWC_API_KEY },
                    data: submissionBody
                })
                .then(apiResponse => {
                    if(apiResponse.data.success){
                        this.setState({
                            alertVariant: 'success',
                            alertDisplayMessage: 'The response was successfully processed',
                            bulkValue: ''
                        });
                    } else {
                        const displayMessage = `
                            Hmmmm, it looks like there was an error submitting the submission data.
                            Check the Api server's log for more details.
                            `;

                        this.setState({
                            alertVariant: 'danger',
                            alertDisplayMessage: displayMessage
                        });
                    }
                })
                .catch(error => {
                    const errMessage = 'There was an error submitting the Api request on the client side.';
                    this.setState({
                        alertVariant: 'danger',
                        alertDisplayMessage: errMessage
                    });
                });
        } else {
            this.setState({
                alertVariant: 'warning',
                alertDisplayMessage: 'You need to select a submission data type'
            });
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(event) {
        this.submitForm();
        this.toggleAlert();
        event.preventDefault();
    }

    toggleAlert(){
        const oppValue = !this.state.showAlert;
        this.setState({ showAlert: oppValue });
    }

    render() {
        const submissionOptions = bulkSubmissionDataTypes.map(type => {
            return (
                <option
                    value={type}
                    key={type}>
                    {type}
                </option>
            );
        });

        const submissionTypes = ['File', 'Text'].map((type, ind) => {
            return <Form.Check
                type="radio"
                key={type}
                label={type}
                name="submissionType"
                id={'formHorizontalRadios-'+ind}
                onChange={this.handleChange}
                value={type}
            />;
        });

        const textAreaElement = <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bulk Submission Area</Form.Label>
            <Form.Control
                as="textarea"
                rows="8"
                value={this.state.bulkValue}
                name="bulkValue"
                onChange={this.handleChange}
            />
        </Form.Group>;

        const fileInputElement = <Form.Group>
            <Form.File
                id="exampleFormControlFile1"
                label="File input (supported file types: .csv)"
                name="bulkValue"
                onChange={this.uploadCSV}
            />
        </Form.Group>;

        const submissionToRender = this.state.submissionType ?
            this.state.submissionType === 'Text' ? textAreaElement : fileInputElement :
            null;

        const dismissableAlertSection = this.state.showAlert ?
            <DismissableAlert
                showAlert={this.state.showAlert}
                alertVariant={this.state.alertVariant}
                alertMessage={this.state.alertDisplayMessage}
                toggleAlert={this.toggleAlert}
            /> : null;

        return (
            <div>
                {dismissableAlertSection}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlSelect1" onChange={this.handleChange}>
                        <Form.Label>Submission Data Type</Form.Label>
                        <Form.Control as="select" name="submissionDataType">
                            {submissionOptions}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Submission Type</Form.Label>
                        <Col>{submissionTypes}</Col>
                    </Form.Group>

                    {submissionToRender}

                    <FormSubmissionButton/>
                </Form>
            </div>
        );
    }
}

export default hot(module)(BulkForm);
