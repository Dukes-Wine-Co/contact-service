import React, { Component } from 'react';

import { hot } from 'react-hot-loader';

class BaseComponent extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e)
    }

    handleSubmit(event) {
        event.preventDefault();
    }
}

export default hot(module)(BaseComponent);
