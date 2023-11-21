import { AboutPage } from '..'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    decorators: [SuspenseDecorator]
    /* argTypes: {
          theme: 
      } */
}

export default meta

type Story = StoryObj<typeof AboutPage>

export const LightAboutPage: Story = {
    args: {},
}

export const DarkAboutPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}