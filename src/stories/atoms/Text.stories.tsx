import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@/components/atoms/Text";

const meta: Meta<typeof Text> = {
    title: "Atoms/Text",
    component: Text,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        children: "テキストテキスト",
        size: "base",
    }
}

export const Xl: Story = {
    args: {
        children: "テキストテキスト",
        size: "xl",
    }
}

export const L: Story = {
    args: {
        children: "テキストテキスト",
        size: "l",
    }
}

export const S: Story = {
    args: {
        children: "テキストテキスト",
        size: "s",
    }
}

export const Xs: Story = {
    args: {
        children: "テキストテキスト",
        size: "xs",
    }
}

export const BoldRedText: Story = {
    args: {
        children: "テキストテキスト",
        size: "base",
        weight: "bold",
        color: "red",
        lineHeight: "24px",
    }
}   