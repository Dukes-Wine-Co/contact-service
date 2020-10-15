import React from 'react';
import Footer from '../../components/static/Footer';

export default {
    title: 'Static/Footer',
    component: Footer
};

const Template = args =>
    <Footer
        {...args}
    />;

export const Primary = Template.bind({});

