import type { Meta, StoryObj } from "@storybook/react";

import { FiledColorIcon } from "@/components/atoms/Icon/FiledColorIcon";

const meta: Meta<typeof FiledColorIcon> = {
    title: "Atoms/Icon/FiledColorIcon",
    component: FiledColorIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof FiledColorIcon>;

export const Red: Story = { args: { color: "red", } }
export const Orange: Story = { args: { color: "orange", } }
export const Pink: Story = { args: { color: "pink", } }
export const White: Story = { args: { color: "white", } }
export const Yellow: Story = { args: { color: "yellow", } }
export const Black: Story = { args: { color: "black", } }
export const Green: Story = { args: { color: "green", } }
export const Gray: Story = { args: { color: "gray", } }
export const Blue: Story = { args: { color: "blue", } }
export const Brown: Story = { args: { color: "brown", } }
export const Purple: Story = { args: { color: "purple", } }
export const Beige: Story = { args: { color: "beige", } }
export const Other: Story = { args: { color: "other", } }