import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    /* argTypes: {
        theme: 
    } */
}

export default meta;

type Story = StoryObj<typeof Sidebar>

export const LightSidebar: Story = {
    args: {}
}

export const DarkSidebar: Story = {
    args: {}
}

DarkSidebar.decorators = [ThemeDecorator(Theme.DARK)]