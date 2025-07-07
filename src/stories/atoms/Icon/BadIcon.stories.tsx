import type { Meta, StoryObj } from "@storybook/react";

import { BadIcon } from "@/components/atoms/Icon/BadIcon";

const meta: Meta<typeof BadIcon> = {
    title: "Atoms/Icon/BadIcon",
    component: BadIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof BadIcon>;

export const Default: Story = {args: {}}
