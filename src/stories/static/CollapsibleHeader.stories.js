import React from 'react';
import CollapsibleHeader from '../../components/static/CollapsibleHeader';

export default {
    title: 'Static/CollapsibleHeader',
    component: CollapsibleHeader,
    argTypes: {
        alertMessage: { control: 'text' },
        alertVariant: { control: 'text' }
    }
};

const Template = args =>
    <CollapsibleHeader
        {...args}
    />;

export const Primary = Template.bind({});

