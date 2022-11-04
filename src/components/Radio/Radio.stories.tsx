import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioButton } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const RadioButtonTemplate: ComponentStory<typeof RadioButton> = (args) => (
  <div>
    {["Radio One", "Radio Two"].map((radioLabel) => (
      <RadioButton
        label={radioLabel}
        value={radioLabel}
        name="radioGroup"
        {...args}
      />
    ))}
  </div>
);

export const SimpleRadioGroup = RadioButtonTemplate.bind({});
