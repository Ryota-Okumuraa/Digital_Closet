import type { Meta, StoryObj } from "@storybook/react";

import { EmailIcon } from "@/components/atoms/Icon/EmailIcon";

const meta: Meta<typeof EmailIcon> = {
    title: "Atoms/Icon/EmailIcon",
    component: EmailIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof EmailIcon>;

export const Default: Story = {};