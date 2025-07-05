import type { Meta, StoryObj } from "@storybook/react";
import type { StoryFn } from "@storybook/react";

import { BrandCreateInput } from "@/components/atoms/BrandCreateInput";
import { useState } from "react";

const meta: Meta<typeof BrandCreateInput> = {
    title: "Atoms/BrandCreateInput",
    component: BrandCreateInput,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof BrandCreateInput>;

export const Default: Story = {
    args: {
        placeholder: "ブランド名を入力してください",
        value: "",
        onChange: (e) => console.log(e.target.value),
    }
}

export const Interactive: StoryFn<typeof BrandCreateInput> = () => {
    const [value, setValue] = useState("");

    return (
        <BrandCreateInput
            placeholder="ブラン名を入力してください"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

