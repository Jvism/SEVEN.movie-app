import React from 'react';

import Button from '../components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    type: { control: {
      type: 'select',
      options: ['primary','secondary']
    }},
    size: { control: {
      type: 'select',
      options: ['sm','md','xl']
    }},
    label: {control: {
      type: 'text'
    }}
  },
};

const Template = (args) => <Button {...args} />;

export const Model1 = Template.bind({});

Model1.args = { type: 'primary', size: 'md', label: 'Button' };