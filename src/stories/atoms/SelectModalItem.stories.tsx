import type { Meta, StoryObj } from "@storybook/react";

import { SelectModalItem } from "@/components/atoms/SelectModalItem";

const meta: Meta<typeof SelectModalItem> = {
    title: "Atoms/SelectModalItem",
    component: SelectModalItem,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof SelectModalItem>;

export const EmailInput: Story = {
    args: {
        label: "写真をuse",
    }
}