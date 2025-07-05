import type { Meta, StoryObj } from "@storybook/react";

import { FiledLabel } from "@/components/atoms/FiledLabel";

const meta: Meta<typeof FiledLabel> = {
    title: "Atoms/FiledLabel",
    component: FiledLabel,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof FiledLabel>;

export const Default: Story = {
    args: {
        label: "テキスト"
    }
}