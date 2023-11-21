import { MainPage } from '..'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    decorators: [SuspenseDecorator]
    /* argTypes: {
          theme: 
      } */
}

export default meta

type Story = StoryObj<typeof MainPage>

export const LightMainPage: Story = {
    args: {},
}

export const DarkMainPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}