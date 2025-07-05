import type { Meta, StoryObj } from "@storybook/react";
import type { StoryFn } from "@storybook/react";
import { useState } from "react";

import { CategoryItem } from "@/components/atoms/CategoryItem";

const meta: Meta<typeof CategoryItem> = {
    title: "Atoms/CategoryItem",
    component: CategoryItem,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof CategoryItem>;

export const Default: Story = {
    args: {
        label: "GU",
        onClick: () => alert("クリックされました！"),
        isActive: false,
    }
}

export const Active: Story = {
    args: {
        label: "GU",
        onClick: () => alert("クリックされました！"),
        isActive: true,
    }
}

export const WidthCheckbox: StoryFn<typeof CategoryItem> = () => {
    const [checked, setChecked] = useState(false)

    return (
        <CategoryItem
            label="GU"
            onClick={() => alert("クリックされました！")}
            showCheckbox={true}
            checked={checked}
            onCheckChange={(checked) => {
                setChecked(checked);
            }}
        />
    )
}
