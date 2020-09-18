import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import BulkForm from '../blocks/BulkForm';

class BulkSubmission extends Component {
    render() {
        return (
            <div>
                <BulkForm/>
            </div>
        );
    }
}

export default hot(module)(BulkSubmission);
