import type { Meta, StoryObj } from "@storybook/react";

import { FiledValue } from "@/components/atoms/FiledValue";

const meta: Meta<typeof FiledValue> = {
    title: "Atoms/FiledValue",
    component: FiledValue,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof FiledValue>;

export const Default: Story = {
    args: {
        label: "レッド"
    }
}
