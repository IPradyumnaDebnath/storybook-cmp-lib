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
    label: "Severity",
    type: "checkbox",
    options: ["Low", "Medium", "High"],
  },
  {
    label: "Time",
    type: "radio",
    options: ["Last 24 hours", "Last 72 hours", "Last week", "Last 6 months"],
  },
];

SimpleFilter.args = {
  filterGroup: Filter_Config,
};
