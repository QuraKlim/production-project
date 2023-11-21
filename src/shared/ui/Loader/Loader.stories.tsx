import { Loader } from './Loader'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    /* argTypes: {
          theme: 
      } */
}

export default meta

type Story = StoryObj<typeof Loader>

export const LightLoader: Story = {
    args: {},
}

export const DarkLoader: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}