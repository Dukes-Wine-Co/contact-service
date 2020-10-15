import React from 'react';
import BulkForm from '../../components/blocks/BulkForm';

export default {
    title: 'Blocks/BulkForm',
    component: BulkForm
};

const Template = args =>
    <BulkForm
        {...args}
    />;

export const Primary = Template.bind({});
