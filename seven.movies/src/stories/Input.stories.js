import React from 'react';
import Input from '../components/atoms/Input';

export default {
    title: 'Atoms/Input',
    component: Input,
    argTypes: {
        label: {
            control: {
                type: 'text'
            }},
        size: { control: {
            type: 'select',
            options: ['sm','md','xl']
        }},
        type: { control: {
            type: 'select',
            options: ['text','password']
        }},
    }
};

const Template = (args) => <Input {...args}></Input>

export const Model1 = Template.bind({});

Model1.args = {label:'Input'};