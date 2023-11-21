import { PageError } from './PageError'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta: Meta<typeof PageError> = {
  title: 'widget/PageError',
  component: PageError,
  /* argTypes: {
        theme: 
    } */
}

export default meta

type Story = StoryObj<typeof PageError>

export const LightPageError: Story = {
  args: {},
}

export const DarkPageError: Story = {
  args: {},
}

DarkPageError.decorators = [ThemeDecorator(Theme.DARK)]
