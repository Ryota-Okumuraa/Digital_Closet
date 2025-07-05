import type { Meta, StoryObj } from "@storybook/react";

import { TrashIcon } from "@/components/atoms/Icon/TrashIcon";

const meta: Meta<typeof TrashIcon> = {
    title: "Atoms/Icon/TrashIcon",
    component: TrashIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof TrashIcon>;

export const Default: Story = {
    args: {
        size: "20px",
    }
}

export const Big: Story = {
    args: {
        size: "30px",
    }
}
