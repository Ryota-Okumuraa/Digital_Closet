import type { Meta, StoryObj } from "@storybook/react";

import { TShirtIcon } from "@/components/atoms/Icon/TShirtIcon";

const meta: Meta<typeof TShirtIcon> = {
    title: "Atoms/Icon/TShirtIcon",
    component: TShirtIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof TShirtIcon>;

export const Default: Story = { args: {} }
