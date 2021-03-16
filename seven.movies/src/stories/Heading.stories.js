import React from 'react';
import Heading from '../components/atoms/Heading'

export default {
    title: 'Atoms/Heading',
    Component: Heading,
    argTypes: {
        label: {
            control: {
                type: 'text'
            }},
        type: {
            control: {
                type: 'select',
                options: ['primary','secondary']
            }},
        size: {
            control: {
                type: 'select',
                options: ['sm','md','xl']
            }
        }

    }
}

const Template = (args) => <Heading {...args}></Heading>;

export const Model1 = Template.bind({});

Model1.args = {size: 'md', type: 'primary', label: 'Heading'};
