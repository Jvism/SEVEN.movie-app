import React from 'react';
import Link from '../components/atoms/Link';

export default {
    title: 'Atoms/Link',
    component: Link,
    argTypes: {
        size: { control: {
            type: 'select',
            options: ['sm','md','xl']
        }},
        label: {control: {
            type: 'text'
            }},
        url: {control: {
            type: 'text'
            }}
    },
};

const Template = (args) => <Link {...args}></Link>;

export const Model1 = Template.bind({});

Model1.args = { size: 'md', label: 'Link' };