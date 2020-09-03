import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { createUnionsOfArrays, flattenObject, upperFirstChar } from '../../../helpers/generic-helper-methods';
import axios from 'axios';
import { API_URL } from '../../../config/app-config';
import DynamicTable from './DynamicTable';
import PageHeader from '../static/PageHeader';
import { textFilter } from 'react-bootstrap-table2-filter';

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
                .filter(key => {
                    const keysToFilterOut = /(_id|__v)/g;
                    return !key.match(keysToFilterOut);
                })
            : null;

        const columnInfo = displayKeys ? displayKeys.map(entry => {
            return {
                headerStyle: (colum, colIndex) => {
                    return { width: '200px', textAlign: 'center' };
                },
                dataField: entry,
                text: entry,
                sort: true,
                filter: textFilter()
            };
        }) : null;

        const tableHeaders = displayKeys ? displayKeys.slice()
            .map(header => <th key={header}>{header}</th>) : null;

        const componentToDisplay = displayKeys
            ? <DynamicTable data={this.state.displayData} columns={columnInfo}/>
            : null;

        return (
            <div>
                <div className="headerKey">
                    <PageHeader title={upperFirstChar(this.state.displayItem) + 'Info'} />
                </div>
                <div>
                    {componentToDisplay}
                </div>
            </div>

        );
    }
}

export default hot(module)(TableDisplay);
