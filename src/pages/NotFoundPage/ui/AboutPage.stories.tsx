import { NotFoundPage } from '..'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [SuspenseDecorator]
    /* argTypes: {
          theme: 
      } */
}

export default meta

type Story = StoryObj<typeof NotFoundPage>

export const LightNotFoundPage: Story = {
    args: {},
}

export const DarkNotFoundPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}