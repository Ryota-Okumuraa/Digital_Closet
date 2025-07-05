import type { Meta, StoryObj } from "@storybook/react";

import { AuthLoginTextLink } from "@/components/atoms/Auth/AuthLoginTextLink";

const meta: Meta<typeof AuthLoginTextLink> = {
    title: "Atoms/Auth/AuthLoginTextLink",
    component: AuthLoginTextLink,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof AuthLoginTextLink>;

export const Default: Story = {
    args: {
        children: "こちら",
    }
}
