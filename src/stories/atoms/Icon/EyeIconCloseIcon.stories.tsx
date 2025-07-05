import type { Meta, StoryObj } from "@storybook/react";

import { EyeSlashCloseIcon } from "@/components/atoms/Icon/EyeSlashCloseIcon";

const meta: Meta<typeof EyeSlashCloseIcon> = {
    title: "Atoms/Icon/EyeSlashCloseIcon",
    component: EyeSlashCloseIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof EyeSlashCloseIcon>;

export const Default: Story = {}

