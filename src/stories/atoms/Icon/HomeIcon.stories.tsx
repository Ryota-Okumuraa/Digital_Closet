import type { Meta, StoryObj } from "@storybook/react";

import { HomeIcon } from "@/components/atoms/Icon/HomeIcon";

const meta: Meta<typeof HomeIcon> = {
    title: "Atoms/Icon/HomeIcon",
    component: HomeIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof HomeIcon>;

export const Default: Story = { args: {} }
