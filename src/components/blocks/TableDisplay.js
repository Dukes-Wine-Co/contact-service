import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import { API_URL, DWC_API_KEY } from '../../config/app-config';
import DynamicTable from './DynamicTable';
import PageHeader from '../static/PageHeader';
import { textFilter } from 'react-bootstrap-table2-filter';
import {
    createUnionsOfArrays,
    flattenObject,
    parseKeyname,
    getDisplayItemFromPath,
    formatTitleNames
} from '../../helpers/generic-helper-methods';

class TableDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayItem: this.props.displayItem,
            displayData: []
        };
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `${API_URL}/${this.state.displayItem}`,
            headers: { 'dwc-token': DWC_API_KEY }
        })
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

        const componentToDisplay = displayKeys
            ? <DynamicTable data={this.state.displayData} columns={columnInfo}/>
            : null;

        return (
            <div>
                <div className="headerKey">
                    <PageHeader title={`${formatTitleNames(this.state.displayItem)} Info`} />
                </div>
                <div>
                    {componentToDisplay}
                </div>
            </div>

        );
    }
}

export default hot(module)(TableDisplay);
