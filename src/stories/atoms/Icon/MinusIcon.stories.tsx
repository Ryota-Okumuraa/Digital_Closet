import type { Meta, StoryObj } from "@storybook/react";

import { MinusIcon } from "@/components/atoms/Icon/MinusIcon";

const meta: Meta<typeof MinusIcon> = {
    title: "Atoms/Icon/MinusIcon",
    component: MinusIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof MinusIcon>;

export const EmailInput: Story = { args: {} }

