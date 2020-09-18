import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

class DismissableAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const DEFAULT_VARIANT = 'primary';
        const DEFAULT_MESSAGE = 'This is the default message';
        const displayMessage = this.props.alertMessage || DEFAULT_MESSAGE;
        const displayVariant = this.props.alertVariant || DEFAULT_VARIANT;

        return (
            <Alert
            variant={displayVariant}
            onClose={() => this.props.toggleAlert()}
            dismissible>
                {displayMessage}
            </Alert>
        );
    }
}

export default hot(module)(DismissableAlert);
