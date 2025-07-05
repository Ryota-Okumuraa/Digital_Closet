import type { Meta, StoryObj } from "@storybook/react";

import { FilterButton } from "@/components/atoms/FilterButton";

const meta: Meta<typeof FilterButton> = {
    title: "Atoms/FilterButton",
    component: FilterButton,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof FilterButton>;

export const Default: Story = {
    args: {
        children: "絞り込み",
        onClick: () => alert('フィルターボタンが押されたよ！')
    }
}