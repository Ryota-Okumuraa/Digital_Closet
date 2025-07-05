import type { Meta, StoryObj } from "@storybook/react";

import { ProfileIcon } from "@/components/atoms/Icon/ProfileIcon";

const meta: Meta<typeof ProfileIcon> = {
    title: "Atoms/Icon/ProfileIcon",
    component: ProfileIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ProfileIcon>;

export const EmailInput: Story = {
    args: {}
}

