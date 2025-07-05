import type { Meta, StoryObj } from "@storybook/react";

import { AppleIcon } from "@/components/atoms/Icon/AppleIcon";

const meta: Meta<typeof AppleIcon> = {
    title: "Atoms/Icon/AppleIcon",
    component: AppleIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof AppleIcon>;

export const EmailInput: Story = { args: {} }