import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Filter } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Filter",
  component: Filter,
} as ComponentMeta<typeof Filter>;

const FilterTemplate: ComponentStory<typeof Filter> = (args) => (
  <Filter {...args} />
);

export const SimpleFilter = FilterTemplate.bind({});

const Filter_Config = [
  {
    label: "Checkbox group",
    type: "checkbox",
    options: ["checkbox-1", "checkbox-2","Checkbox -3","checkbox-4","Checkbox -5"],
  },
  {
    label: "Radio group",
    type: "radio",
    options: ["Radio-1", "radio-2"],
  },
];

SimpleFilter.args={
  filterGroup:Filter_Config
}