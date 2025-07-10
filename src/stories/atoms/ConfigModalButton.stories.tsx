import type { Meta, StoryObj } from "@storybook/react";

import { ConfigModalButton } from "@/components/atoms/ConfigModalButton";

const meta: Meta<typeof ConfigModalButton> = {
    title: "Atoms/ConfigModalButton",
    component: ConfigModalButton,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ConfigModalButton>;

export const Default: Story = {
    args: {
        onClick: () => action("ConfigModalButton clicked"),
        label: "ウェア",
    }
}

