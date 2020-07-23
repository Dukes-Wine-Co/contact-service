import React  from "react";
import {hot} from 'react-hot-loader';
import { createFormComponent } from '../../helpers/methods'
import { Form } from 'react-bootstrap';
import BaseComponent from '../static/BaseComponent';
import { addressFormArr } from '../../data/submission-schemas';
import FormSubmissionButton from '../static/FormSubmissionButton';

class Address extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const formComponent = createFormComponent(addressFormArr, this.handleChange, this.state)

        return(
            <div className="Address">
                <h1>{this.props.title} Submission</h1>
                <Form>
                    {formComponent}
                    <FormSubmissionButton/>
                </Form>
            </div>
        );
    }
}

export default hot(module)(Address);
