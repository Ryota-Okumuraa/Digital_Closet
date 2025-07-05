import type { Meta, StoryObj } from "@storybook/react";

import { LockKeyIcon } from "@/components/atoms/Icon/LockKey";

const meta: Meta<typeof LockKeyIcon> = {
    title: "Atoms/Icon/LockKeyIcon",
    component: LockKeyIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof LockKeyIcon>;

export const Default: Story = {};