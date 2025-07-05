import type { Meta, StoryObj } from "@storybook/react";

import { ConfigModalText } from "@/components/atoms/ConfigModalText";

const meta: Meta<typeof ConfigModalText> = {
    title: "Atoms/ConfigModalText",
    component: ConfigModalText,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ConfigModalText>;

export const Default: Story = {
    args: {
        children: "一度削除すると、元に戻すことができません。"
    }
}
