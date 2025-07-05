import type { Meta, StoryObj } from "@storybook/react";

import { AuthPageTitle } from "@/components/atoms/Auth/AuthPageTitle";

const meta: Meta<typeof AuthPageTitle> = {
    title: "Atoms/Auth/AuthPageTitle",
    component: AuthPageTitle,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof AuthPageTitle>;

export const Default: Story = {
    args: {
        children: "ログイン"
    }
}

