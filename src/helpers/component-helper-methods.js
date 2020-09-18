import React from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const createSelectElement = (entry, handleChangeMethod, state) => {
    const selectMap = entry.data.map(selectDatum => <option
        key={selectDatum.abbreviation}>{selectDatum.abbreviation}</option>);

    return <Form.Group
        controlId={'addressForm-' + entry.keyName}
        key={entry.keyName}
        >
        <Form.Label>{entry.label}</Form.Label>
        <Form.Control
            as="select"
            value={state[entry.keyName]}
            onChange={handleChangeMethod}
            name={entry.keyName}
            key={entry.keyName}
            multiple={entry.multiple}>
            {selectMap}
        </Form.Control>
    </Form.Group>;
};
const createFormElement = (entry, handleChangeMethod, state) =>
        <Form.Group
            controlId={'addressForm-' + entry.keyName}
            key={entry.keyName}>
            <Form.Label>{entry.label}</Form.Label>
            <Form.Control
                required
                type={entry.type || 'text'}
                name={entry.keyName}
                key={entry.keyName}
                placeholder={'Enter ' + entry.label}
                onChange={handleChangeMethod}
                value={state[entry.keyName]}/>
        </Form.Group>;

const createFormComponent = (formData, handleChangeMethod, state) => {
    return formData.map(entry =>
        entry.type === 'select'
            ? createSelectElement(entry, handleChangeMethod, state)
            : createFormElement(entry, handleChangeMethod, state));
};



const createNavLink = entry => {
    return (
        <Nav.Link eventKey={entry.key} key={entry.key} href={entry.link}>
            {entry.name}
        </Nav.Link>
    );
};

const createDropdownLink = (entry, linkComponent) => {
    return (
        <NavDropdown.Item href={entry.link} key={entry.key} eventKey={entry.key}>
            {linkComponent}
        </NavDropdown.Item>
    );
};

const createDropdownGroup = (linkArr, title) => {
    const dropdownGroup = linkArr
        .map(entry => createDropdownLink(entry, createNavLink(entry)));

    return <NavDropdown title={title} id={'nav-dropdown-'+title} key={'nav-dropdown-'+title}>
        {dropdownGroup}
    </NavDropdown>;
};

const createNavLinks = linkArr => linkArr.map(entry => createNavLink(entry));

export {
    createNavLink,
    createFormComponent,
    createNavLinks,
    createDropdownGroup
};
