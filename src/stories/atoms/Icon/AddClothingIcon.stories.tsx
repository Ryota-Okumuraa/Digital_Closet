import type { Meta, StoryObj } from "@storybook/react";

import { AddClothingIcon } from "@/components/atoms/Icon/AddClothingIcon";

const meta: Meta<typeof AddClothingIcon> = {
    title: "Atoms/Icon/AddClothingIcon",
    component: AddClothingIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof AddClothingIcon>;

export const Default: Story = {
    args: {
        onClick: () => ('新規追加ボタンが押されました！')
    }
}

