import type { Meta, StoryObj } from "@storybook/react";
import type { StoryFn } from "@storybook/react";

import { AuthInput } from "@/components/atoms/Auth/AuthInput";
import { useState } from "react";

const meta: Meta<typeof AuthInput> = {
    title: "Atoms/Auth/AuthInput",
    component: AuthInput,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof AuthInput>;

export const EmailInput: Story = {
    args: {
        type: "email",
        value: "",
        placeholder: "メールアドレス",
        onChange: (e) => console.log("email", e.target.value)
    }
}

export const PasswordInput: Story = {
    args: {
        type: "password",
        rightIcon: true,
        value: "",
        placeholder: "パスワード",
        onChange: (e) => console.log("password", e.target.value),
        onClickRightIcon: () => alert('目のアイコンがクリックされたよ！'),
    }
}

export const PasswordInputInteractive: StoryFn<typeof AuthInput> = () => {
    const [value, setValue] = useState("");
    const [rightIcon, setRightIcon] = useState(false);

    return (
        <AuthInput
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="パスワード"
            rightIcon={rightIcon}
            onClickRightIcon={() => setRightIcon((prev) => !prev)}
        />
    )
}