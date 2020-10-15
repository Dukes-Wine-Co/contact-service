import React from 'react';
import Address from '../../components/blocks/Address';

export default {
    title: 'Blocks/Address',
    component: Address
};

const Template = args =>
    <Address
        {...args}
    />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'Address '
};

