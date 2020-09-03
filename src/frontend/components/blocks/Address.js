import React from 'react';
import { hot } from 'react-hot-loader';
import { createFormComponent } from '../../../helpers/component-helper-methods';
import BaseComponent from '../static/BaseComponent';
import { addressFormArr } from '../../../data/submission-schemas';

class Address extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
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
