import React from 'react';
import Paragraph from '../components/atoms/Paragraph';

export default{
    title: 'Atoms/Paragraph',
    component: Paragraph,
    argTypes: {
        label: {
            control:{
                type: 'text'
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['sm','md','xl']
            }
        }
    }
};

const Template = (args) => <Paragraph {...args}/>

export const Model1 = Template.bind({});

Model1.args = { 
    size: 'md', 
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac neque congue felis viverra rutrum eget sit amet turpis. Ut finibus ipsum ligula, id vestibulum est molestie ut. Ut in justo magna. Nunc lacinia cursus tellus ut maximus. Maecenas posuere vehicula velit eleifend ultrices. Ut ac lacus vel est ultricies commodo eu vestibulum nunc. Proin odio diam, molestie dignissim dolor vitae, semper elementum tellus. Nam ut vestibulum dolor. Curabitur vitae feugiat arcu. Donec pellentesque orci sed purus scelerisque, sit amet ullamcorper orci tempor.'
    };
