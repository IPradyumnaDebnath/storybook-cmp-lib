import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Details } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Details",
  component: Details,
} as ComponentMeta<typeof Details>;

const DetailsTemplate: ComponentStory<typeof Details> = (args) => (
  <Details {...args}>Details content for this componnet</Details>
);

export const DetailsStory = DetailsTemplate.bind({});
DetailsStory.args = {
  summary:'Summary'
};
