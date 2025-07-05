import type { Meta, StoryObj } from "@storybook/react";

import { PlusButton } from "@/components/atoms/PlusButton";

const meta: Meta<typeof PlusButton> = {
    title: "Atoms/PlusButton",
    component: PlusButton,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof PlusButton>;

export const Default: Story = {
    args: {
        onClick: () => alert("追加ボタンが押されました！")
    }
}
