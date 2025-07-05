import type { Meta, StoryObj } from "@storybook/react";

import { SelectModalButton } from "@/components/atoms/SelectModalButton";

const meta: Meta<typeof SelectModalButton> = {
    title: "Atoms/SelectModalButton",
    component: SelectModalButton,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof SelectModalButton>;

export const Default: Story = {
    args: {
        label: "キャンセル",
    }
}
