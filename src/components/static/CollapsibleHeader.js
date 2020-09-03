import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Nav from 'react-bootstrap/Nav';
import { createDropdownGroup, createNavLink } from '../../helpers/component-helper-methods';
import { homeLink, requestLinks, submitLinks } from '../../data/header-links';

class CollapsibleHeader extends Component {
    render() {
        const submitLinksDropdown = createDropdownGroup(submitLinks, 'Submit');
        const requestLinksDropdown = createDropdownGroup(requestLinks, 'Request');
        const homeLinkComponent = createNavLink(homeLink);

        return (
            <div className="Header">
                <Nav className="justify-content-center" justify defaultActiveKey="/">
                    {homeLinkComponent}
                    {submitLinksDropdown}
                    {requestLinksDropdown}
                </Nav>
            </div>
        );
    }
}

export default hot(module)(CollapsibleHeader);
