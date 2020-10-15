import React from 'react';
import PageHeader from '../../components/static/PageHeader';

export default {
    title: 'Static/PageHeader',
    component: PageHeader
};

const Template = args =>
    <PageHeader
        {...args}
    />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'This is an example title'
};

