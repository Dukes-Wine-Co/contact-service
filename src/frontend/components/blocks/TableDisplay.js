import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { createUnionsOfArrays, flattenObject, upperFirstChar } from '../../../helpers/generic-helper-methods';
import axios from 'axios';
import { API_URL } from '../../../config/app-config';
import Table from 'react-bootstrap/Table';

const getDisplayItemFromPath = pathName => pathName.replace('/display/', '');

class TableDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayItem: getDisplayItemFromPath(this.props.location.pathname),
            displayData: []
        };
    }

    componentDidMount() {
        axios.get(`${API_URL}/${this.state.displayItem}`)
            .then(info => {
                const flattenEveryDBObj = info.data.map(dbObj => flattenObject(dbObj));
                this.setState({ displayData: flattenEveryDBObj });
            });
    }

    render() {
        const displayKeys = this.state.displayData.length
            ? createUnionsOfArrays(this.state.displayData
                .map(dbObj => Object.keys(flattenObject(dbObj))))
            : null;

        const tableHeaders = displayKeys ? displayKeys.slice()
            .map(header => <th key={header}>{header}</th>) : null;

        return (
            <div>
                <h1>{upperFirstChar(this.state.displayItem)} Info</h1>
                <div>
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                            {tableHeaders}
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.displayData.map(item => {
                            const data = displayKeys.map(key => item[key]);
                            return (
                                <tr key={item._id}>
                                    {data.map(dataPair => <td key={`${item._id}-${dataPair}`}>{dataPair}</td>)}
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                </div>
            </div>

        );
    }
}

export default hot(module)(TableDisplay);
