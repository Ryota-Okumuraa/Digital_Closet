import type { Meta, StoryObj } from "@storybook/react";
import { AccordionTitle } from "@/components/atoms/AccordionTitle";

const meta: Meta<typeof AccordionTitle> = {
    title: "Atoms/AccordionTitle",
    component: AccordionTitle,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AccordionTitle>;

export const Closed: Story = {
    args: {
        label: "トップス",
        isOpen: false,
        onClick: () => alert('閉じてます！'),
    }
}

export const Opened: Story = {
    args: {
        label: "トップス",
        isOpen: true,
        onClick: () => alert('開いてます!'),
    }
}