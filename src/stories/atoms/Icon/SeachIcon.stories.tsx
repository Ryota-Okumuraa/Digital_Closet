import type { Meta, StoryObj } from "@storybook/react";

import { SearchIcon } from "@/components/atoms/Icon/SeachIcon";

const meta: Meta<typeof SearchIcon> = {
    title: "Atoms/Icon/SeachIcon",
    component: SearchIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof SearchIcon>;

export const Default: Story = { args: {} }