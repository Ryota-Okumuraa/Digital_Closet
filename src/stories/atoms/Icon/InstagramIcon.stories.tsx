import type { Meta, StoryObj } from "@storybook/react";

import { InstagramIcon } from "@/components/atoms/Icon/InstagramIcon";

const meta: Meta<typeof InstagramIcon> = {
    title: "Atoms/Icon/InstagramIcon",
    component: InstagramIcon,

    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof InstagramIcon>;

export const Default: Story = { args: {} }