import type { Meta, StoryObj } from "@storybook/react";

import { AuthFormLabel } from "@/components/atoms/Auth/AuthFormLabel";

const meta: Meta<typeof AuthFormLabel> = {
    title: "Atoms/Auth/AuthFormLabel",
    component: AuthFormLabel,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof AuthFormLabel>;

export const Default: Story = {
    args: {
        children: "メールアドレス",
    }
}
