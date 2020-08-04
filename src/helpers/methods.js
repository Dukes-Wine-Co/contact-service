import React from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

const createSelectElement = (entry, handleChangeMethod, state) => {
    const selectMap = entry.data.map(selectDatum => {
        return <option key={selectDatum.abbreviation}>{selectDatum.abbreviation}</option>
    })

    return (
        <Form.Group controlId={'addressForm-' + entry.keyName} key={entry.keyName}>
            <Form.Label>{entry.label}</Form.Label>
            <Form.Control as="select" value={state[entry.keyName]} onChange={handleChangeMethod} name={entry.keyName}>
                {selectMap}
            </Form.Control>
        </Form.Group>
    )
}
const createFormElement = (entry, handleChangeMethod, state) => {
    return (
        <Form.Group controlId={'addressForm-' + entry.keyName} key={entry.keyName}>
            <Form.Label>{entry.label}</Form.Label>
            <Form.Control required type={entry.type || 'text'} name={entry.keyName} placeholder={'Enter ' + entry.label}
                          onChange={handleChangeMethod} value={state[entry.keyName]}/>
        </Form.Group>
    );
}

const createFormComponent = (formArr, handleChangeMethod, state) => {
    return formArr.map(entry => {
        return (entry.type === 'select')
            ? createSelectElement(entry, handleChangeMethod, state)
            : createFormElement(entry, handleChangeMethod, state);
    })
}

const createNavLinks = linkArr => {
    return linkArr.map(entry => {
        return (
            <Nav.Link eventKey={entry.key} key={entry.key} href={entry.link}>{entry.name}</Nav.Link>
        )
    })
}

export {
    createFormComponent,
    createNavLinks
};
