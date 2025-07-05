import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { AuthCheckbox } from "@/components/atoms/Auth/AuthCheckbox";

const meta: Meta<typeof AuthCheckbox> = {
    title: "Atoms/Auth/AuthCheckbox",
    component: AuthCheckbox,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof AuthCheckbox>;

export const Checked: Story = {
    args: {
        checked: true,
        onClick: () => alert("チェックしています！"),
    }
}

export const NotChecked: Story = {
    args: {
        checked: false,
        onClick: () => alert("チェックされていないよ！"),
    }
}

export const Interactive: Story = {
    render: () => {
        const [checked, setChecked] = useState(false);
        return (
            <AuthCheckbox
                checked={checked}
                onClick={() => setChecked((prev) => !prev)}
            />
        )
    }
}