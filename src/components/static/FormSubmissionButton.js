import React, { Component } from "react";
import {hot} from 'react-hot-loader';
import { Button } from 'react-bootstrap';

class FormSubmissionButton extends Component {
    render(){
        return (
            <div className="text-center">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        );
    }
}

export default hot(module)(FormSubmissionButton);
