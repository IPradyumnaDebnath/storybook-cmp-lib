import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const ButtonPrimary = ButtonTemplate.bind({});
ButtonPrimary.args = {
  label: "Button Label",
  variant:'primary'
};


export const ButtonSecondary = ButtonTemplate.bind({});
ButtonSecondary.args = {
  label: "Button Label",
  variant:'secondary'
};