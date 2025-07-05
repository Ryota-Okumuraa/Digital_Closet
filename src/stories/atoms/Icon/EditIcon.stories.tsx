import type { Meta, StoryObj } from "@storybook/react";

import { EditIcon } from "@/components/atoms/Icon/EditIcon";

const meta: Meta<typeof EditIcon> = {
    title: "Atoms/Icon/EditIcon",
    component: EditIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof EditIcon>;

export const Default: Story = {}
