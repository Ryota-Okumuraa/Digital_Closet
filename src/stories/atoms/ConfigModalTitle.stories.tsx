import type { Meta, StoryObj } from "@storybook/react";

import { ConfigModalTitle } from "@/components/atoms/ConfigModalTitle";

const meta: Meta<typeof ConfigModalTitle> = {
    title: "Atoms/ConfigModalTitle",
    component: ConfigModalTitle,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ConfigModalTitle>;

export const Default: Story = {
    args: {
        label: "GUを削除しますか？",
    }
}
