import type { Meta, StoryObj } from "@storybook/react";

import { FiledSeasonIcon } from "@/components/atoms/Icon/FiledSeasonIcon";

const meta: Meta<typeof FiledSeasonIcon> = {
    title: "Atoms/Icon/FiledSeasonIcon",
    component: FiledSeasonIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof FiledSeasonIcon>;

export const spring: Story = { args: { season: "spring" } }
export const summer: Story = { args: { season: "summer" } }
export const automn: Story = { args: { season: "autumn" } }
export const winter: Story = { args: { season: "winter" } }
