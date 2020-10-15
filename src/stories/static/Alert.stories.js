import React from 'react';
import DismissableAlert from '../../components/static/Alert';

export default {
    title: 'Static/DismissableAlert',
    component: DismissableAlert,
    argTypes: {
        alertMessage: { control: 'text' },
        alertVariant: { control: 'text' }
    }
};

const Template = args =>
    <DismissableAlert
        {...args}
    />;

export const Primary = Template.bind({});

Primary.args = {
    alertMessage: 'This is an example',
    alertVariant: 'success'
};

