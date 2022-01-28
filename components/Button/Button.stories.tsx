// Button.stories.js|jsx|ts|tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import BaseButton, { IButton } from "./Base";
import { CheckIcon } from "@heroicons/react/outline";

const meta: Meta = {
  title: "Components/Buttons",
  component: BaseButton,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "inverse"],
      control: { type: "radio" },
    },
    icon: {
      control: { disable: true },
    },
  },
};

export default meta;

const Template: Story<IButton> = (args) => <BaseButton {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "Base Button",
  variant: "primary",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  children: "Icon at Start",
  variant: "primary",
  startIcon: <CheckIcon className="h-5 w-5" />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  children: "Icon at Start",
  variant: "primary",
  endIcon: <CheckIcon className="h-5 w-5" />,
};
