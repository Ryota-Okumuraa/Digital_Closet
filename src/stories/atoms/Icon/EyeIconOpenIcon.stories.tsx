import type { Meta, StoryObj } from "@storybook/react";

import { EyeSlashOpenIcon } from "@/components/atoms/Icon/EyeSlashOpenIcon";

const meta: Meta<typeof EyeSlashOpenIcon> = {
    title: "Atoms/Icon/EyeSlasOpenIcon",
    component: EyeSlashOpenIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof EyeSlashOpenIcon>;

export const Default: Story = {}
