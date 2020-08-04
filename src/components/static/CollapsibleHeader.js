import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Nav from 'react-bootstrap/Nav';
import { createNavLinks } from '../../helpers/methods';
import { headerLinks } from '../../data/header-links';

class CollapsibleHeader extends Component {
    render() {
        const navLinkComponent = createNavLinks(headerLinks)

        return (
            <div className="Header">
                <Nav className="justify-content-center" justify variant="tabs" defaultActiveKey="/">
                    {navLinkComponent}
                </Nav>
            </div>
        );
    }
}

export default hot(module)(CollapsibleHeader);
