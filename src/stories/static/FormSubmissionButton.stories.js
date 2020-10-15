import React from 'react';
import FormSubmissionButton from '../../components/static/FormSubmissionButton';

export default {
    title: 'Static/FormSubmissionButton',
    component: FormSubmissionButton
};

const Template = args =>
    <FormSubmissionButton
        {...args}
    />;

export const Primary = Template.bind({});

