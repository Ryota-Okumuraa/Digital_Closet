import type { Meta, StoryObj } from "@storybook/react";

import { FilterIcon } from "@/components/atoms/Icon/FilterIcon";

const meta: Meta<typeof FilterIcon> = {
    title: "Atoms/Icon/FilterIcon",
    component: FilterIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof FilterIcon>;

export const Default: Story = { args: {} }