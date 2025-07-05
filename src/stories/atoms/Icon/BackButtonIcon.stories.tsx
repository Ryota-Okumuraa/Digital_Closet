import type { Meta, StoryObj } from "@storybook/react";
import { BackButtonIcon } from "@/components/atoms/Icon/BackButtonIcon";

const meta: Meta<typeof BackButtonIcon> = {
    title: "Atoms/Icon/BackButtonIcon",
    component: BackButtonIcon,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof BackButtonIcon>;

export const Default: Story = {};