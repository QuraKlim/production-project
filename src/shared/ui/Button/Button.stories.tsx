import { ComponentMeta, Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProviders";

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    /* argTypes: {
        theme: 
    } */
}

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Button Text',
    }
}

export const Clear: Story = {
    args: {
        children: 'Button Text',
        theme: ThemeButton.CLEAR
    }
}

export const Outline: Story = {
    args: {
        children: 'Button Text',
        theme: ThemeButton.OUTLINE
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'Button Text',
    }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearDark: Story = {
    args: {
        children: 'Button Text',
        theme: ThemeButton.CLEAR
    }
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDark: Story = {
    args: {
        children: 'Button Text',
        theme: ThemeButton.OUTLINE
    }
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]