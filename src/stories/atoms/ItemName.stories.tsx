import type { Meta, StoryObj } from "@storybook/react";

import { ItemName } from "@/components/atoms/ItemName";

const meta: Meta<typeof ItemName> = {
    title: "Atoms/ItemName",
    component: ItemName,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ItemName>;

export const EmailInput: Story = {
    args: {
        name: "俺の服"
    }
}
