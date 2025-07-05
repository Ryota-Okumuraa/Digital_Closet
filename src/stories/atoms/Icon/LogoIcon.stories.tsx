import type { Meta, StoryObj } from "@storybook/react";

import { LogoIcon } from "@/components/atoms/Icon/LogoIcon";

const meta: Meta<typeof LogoIcon> = {
    title: "Atoms/Icon/LogoIcon",
    component: LogoIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof LogoIcon>;

export const Default: Story = { args: {} }