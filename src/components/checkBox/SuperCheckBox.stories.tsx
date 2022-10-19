import React from 'react';

import {SuperCheckbox} from "./SuperCheckBox";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {action} from "@storybook/addon-actions";

export default {
    title: 'SuperCheckBox',
    component: SuperCheckbox,
    argTypes: {
        onChangeChecked: { description: 'checked' },
        spanClassName: { description: 'class' },

    },
} as ComponentMeta<typeof SuperCheckbox>;


const Template: ComponentStory<typeof SuperCheckbox> = (args) => <SuperCheckbox {...args} />;

export const SuperCheckboxStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SuperCheckboxStory.args = {
    onChangeChecked: action('checked')

};