import type { Meta, StoryObj } from "@storybook/react";

import { PlusIcon } from "@/components/atoms/Icon/PlusIcon";

const meta: Meta<typeof PlusIcon> = {
    title: "Atoms/Icon/PlusIcon",
    component: PlusIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof PlusIcon>;

export const Default: Story = { args: {} }
