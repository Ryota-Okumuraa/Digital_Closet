import type { Meta, StoryObj } from "@storybook/react";

import { NewGenerateIcon } from "@/components/atoms/Icon/NewGenerateIcon";

const meta: Meta<typeof NewGenerateIcon> = {
    title: "Atoms/Icon/NewGenerateIcon",
    component: NewGenerateIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof NewGenerateIcon>;

export const Default: Story = {
    args: {
        onClick: () => ('新規追加ボタンが押されました！')
    }
}

