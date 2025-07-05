import type { Meta, StoryObj } from "@storybook/react";

import { CategoryButton } from "@/components/atoms/CategoryButton";

const meta: Meta<typeof CategoryButton> = {
    title: "Atoms/CategoryButton",
    component: CategoryButton,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof CategoryButton>;

export const Default: Story = {
    args: {
        label: "ウェア"
    }
}

