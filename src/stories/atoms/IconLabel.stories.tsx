import type { Meta, StoryObj } from "@storybook/react";

import { IconLabel } from "@/components/atoms/IconLabel";

const meta: Meta<typeof IconLabel> = {
    title: "Atoms/IconLabel",
    component: IconLabel,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof IconLabel>;

export const Default: Story = {
    args: {
        children: "ホーム"
    }
}
