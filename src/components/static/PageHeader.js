import React, { Component } from 'react';

class PageHeader extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <h1 style={{
                borderRadius: '0.5em',
                textAlign: 'center',
                // color: '#844592',
                // border: '2px solid #844592',
                padding: '0.5em'
            }}>{this.props.title}</h1>
        );
    }
}

export default PageHeader;
