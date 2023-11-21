import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";
import { Navbar } from "./Navbar";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    /* argTypes: {
        theme: 
    } */
}

export default meta;

type Story = StoryObj<typeof Navbar>

export const LightNavbar: Story = {
    args: {}
}

LightNavbar.decorators = [RouterDecorator]

export const DarkNavbar: Story = {
    args: {}
}

DarkNavbar.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator]