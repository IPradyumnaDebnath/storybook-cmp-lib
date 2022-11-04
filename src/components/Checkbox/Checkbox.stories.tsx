import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const SimpleCheckbox = CheckboxTemplate.bind({});
SimpleCheckbox.args={
  label:'Checkbox Label'
}