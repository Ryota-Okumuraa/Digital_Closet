import type { Meta, StoryObj } from "@storybook/react";

import { GoogleIcon } from "@/components/atoms/Icon/GoogleIcon";

const meta: Meta<typeof GoogleIcon> = {
    title: "Atoms/Icon/GoogleIcon",
    component: GoogleIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof GoogleIcon>;

export const Default: Story = { args: {} }
