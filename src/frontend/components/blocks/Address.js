import React from 'react';
import { hot } from 'react-hot-loader';
import { createFormComponent } from '../../../helpers/methods';
import { Form } from 'react-bootstrap';
import BaseComponent from '../static/BaseComponent';
import { addressFormArr } from '../../../data/submission-schemas';
import FormSubmissionButton from '../static/FormSubmissionButton';

class Address extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const formComponent = createFormComponent(addressFormArr, this.handleChange, this.state);

        return (
            <div className="Address">
                {formComponent}
            </div>
        );
    }
}

export default hot(module)(Address);
