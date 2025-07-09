import type { Meta, StoryObj } from "@storybook/react";
import type { StoryFn } from "@storybook/react";

import { SearchInput } from "@/components/atoms/SearchInput";
import { useState } from "react";

const meta: Meta<typeof SearchInput> = {
    title: "Atoms/SearchInput",
    component: SearchInput,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
    args: {
        value: "",
        onChange: (e) => console.log(e.target.value),
        placeholder: "キーワードで検索",
    }
}

export const Interactive: StoryFn<typeof SearchInput> = () => {
    const [value, setValue] = useState("");

    return (
        <SearchInput
            placeholder="キーワードで検索"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
