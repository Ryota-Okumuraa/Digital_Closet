import type { Meta, StoryObj } from "@storybook/react";

import { ForgotPasswordText } from "@/components/atoms/ForgotPasswordText";

const meta: Meta<typeof ForgotPasswordText> = {
    title: "Atoms/FotgotPasswordText",
    component: ForgotPasswordText,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ForgotPasswordText>;

export const Default: Story = {
    args: {
        children: "パスワードをお忘れですか？",
    }
}
