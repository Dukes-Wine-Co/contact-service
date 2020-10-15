import React from 'react';
import DynamicTable from '../../components/blocks/DynamicTable';

export default {
    title: 'Blocks/DynamicTable',
    component: DynamicTable
};

const a = [{
    'address.__v': 0,
    'address._id': '5f2b3b6b8f2b9d46fe13c928',
    'address.addressLine1': '311 Oak St',
    'address.addressLine2': 'Apt 818',
    'address.city': 'Oakland',
    'address.state': 'CA',
    'address.zipCode': '94607',
    'endTime': '8:00 PM',
    'eventDate': '2020-08-07T19:23:35.922Z',
    'startTime': '6:30 PM',
    'timeZone': 'PST',
    'title': '2020 July Virtual Tasting',
    'virtual': true,
    '__v': 0,
    '_id': '5f2daa377c4c3f65e03db50e'
}];

const b = [
    { dataField: 'address.state', text: 'address.state', sort: true, filter: { props: {} } },
    { dataField: 'address.city', text: 'address.city', sort: true, filter: { props: {} } },
    { dataField: 'address.zipCode', text: 'address.zipCode', sort: true, filter: { props: {} } },
    { dataField: 'address.addressLine1', text: 'address.addressLine1', sort: true, filter: { props: {} } },
    { dataField: 'address.addressLine2', text: 'address.addressLine2', sort: true, filter: { props: {} } },
    { dataField: 'virtual', text: 'virtual', sort: true, filter: { props: {} } },
    { dataField: 'title', text: 'title', sort: true, filter: { props: {} } },
    { dataField: 'eventDate', text: 'eventDate', sort: true, filter: { props: {} } },
    { dataField: 'startTime', text: 'startTime', sort: true, filter: { props: {} } },
    { dataField: 'endTime', text: 'endTime', sort: true, filter: { props: {} } },
    { dataField: 'timeZone', text: 'timeZone', sort: true, filter: { props: {} } }
];

const cols = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];

const Template = args =>
    <DynamicTable
        columns={cols}
        {...args}
    />;

export const Primary = Template.bind({});


