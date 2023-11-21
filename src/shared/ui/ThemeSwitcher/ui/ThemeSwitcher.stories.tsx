import { ThemeSwitcher } from './ThemeSwitcher'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    /* argTypes: {
          theme: 
      } */
}

export default meta

type Story = StoryObj<typeof ThemeSwitcher>

export const LightThemeSwitcher: Story = {
    args: {},
}

export const DarkThemeSwitcher: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}