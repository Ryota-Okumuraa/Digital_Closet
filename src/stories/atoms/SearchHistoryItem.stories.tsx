import type { Meta, StoryObj } from "@storybook/react";

import { SearchHistoryItem } from "@/components/atoms/SearchHistoryItem";

const meta: Meta<typeof SearchHistoryItem> = {
    title: "Atoms/SearchHistoryItem",
    component: SearchHistoryItem,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof SearchHistoryItem>;

export const Default: Story = {
    args: {
        children: "ウェア"
    }
}
