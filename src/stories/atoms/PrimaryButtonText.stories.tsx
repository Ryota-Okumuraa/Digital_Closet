import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryButtonText } from "@/components/atoms/PrimaryButtonText";

const meta: Meta<typeof PrimaryButtonText> = {
    title: "Atoms/PrimaryButtonText",
    component: PrimaryButtonText,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof PrimaryButtonText>;

export const Default: Story = {
    args: {
        children: "テキストが入ります",
    }
}

