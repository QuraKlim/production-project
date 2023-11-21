import { AppLink, AppLinkTheme } from './AppLink'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/', children: 'Link'
    }
    /* argTypes: {
          theme: 
      } */
}

export default meta

type Story = StoryObj<typeof AppLink>

export const AppLinkPrimary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [RouterDecorator]
}

export const AppLinkSecondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [RouterDecorator]
}

export const DarkAppLinkPrimary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.DARK)]
}

export const DarkAppLinkSecondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.DARK)]
}