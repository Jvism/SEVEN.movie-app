import React from "react";

import Icon from "../components/atoms/Icon";

export default {
	title: "Atoms/Icon",
	component: Icon,
	argTypes: {
		background: {
			control: {
				type: "color",
			},
		},
		size: {
			control: {
				type: "select",
				options: ["sm", "md", "xl"],
			},
		},
	},
};

const Template = (args) => <Icon {...args} />;

export const Model1 = Template.bind({});

Model1.args = { size: "md", background: 'red' };
