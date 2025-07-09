import type { Meta, StoryObj } from "@storybook/react";

import { ItemThumbnail } from "@/components/atoms/ItemThumbnail";

const meta: Meta<typeof ItemThumbnail> = {
    title: "Atoms/ItemThumbnail",
    component: ItemThumbnail,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ItemThumbnail>;

export const Default: Story = {
    args: {
        imgUrl: "/images/products/itemImg.png"
    }
}

