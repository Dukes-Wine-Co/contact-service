import React from 'react';
import Form from 'react-bootstrap/Form';

const createFormComponent = (formArr, handleChangeMethod, state) => {
    return formArr.map(entry => {
        return (
          <Form.Group controlId={'addressForm-' + entry.keyName}>
            <Form.Label>{entry.label}</Form.Label>
            <Form.Control type={entry.type || 'text'} name={entry.keyName} placeholder={'Enter ' + entry.label} onChange={handleChangeMethod} value={state[entry.keyName]}/>
            {/*<Form.Text className="text-muted">*/}
            {/*  We'll never share your email with anyone else.*/}
            {/*</Form.Text>*/}
            </Form.Group>
        );
    })
}

export { createFormComponent };
