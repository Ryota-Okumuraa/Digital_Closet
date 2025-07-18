import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: [
        // "../src/**/*.stories.@(js|jsx|ts|tsx)",
        // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
};

export default config;