import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import BulkForm from '../blocks/BulkForm';
import PageHeader from '../static/PageHeader';

class BulkSubmission extends Component {
    render() {
        return (
            <div>
                <div className="headerKey">
                    <PageHeader title={this.props.title} />
                </div>
                <BulkForm/>
            </div>
        );
    }
}

export default hot(module)(BulkSubmission);
