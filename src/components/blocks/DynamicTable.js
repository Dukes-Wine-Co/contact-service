import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';

class DynamicTable extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <BootstrapTable
                    bootstrap4
                    keyField='dynamic-table'
                    data={this.props.data}
                    columns={this.props.columns}
                    striped
                    hover
                    wrapperClasses="table-responsive"
                    pagination={paginationFactory()}
                    columnToggle
                    filter={ filterFactory() }
                />
            </div>
        );
    }
}

export default hot(module)(DynamicTable);
