import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Button } from 'react-bootstrap';

class FormSubmissionButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-center">
                <Button variant="primary" type="submit" onClick={this.props.handleSubmit}>
                    Submit
                </Button>
            </div>
        );
    }
}

export default hot(module)(FormSubmissionButton);
