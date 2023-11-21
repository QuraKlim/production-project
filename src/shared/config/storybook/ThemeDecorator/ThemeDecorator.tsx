import { Theme } from 'app/providers/ThemeProviders'
import 'app/styles/index.scss'
import { JSXElementConstructor, ReactElement, ReactNode } from 'react'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => ReactElement<unknown, string | JSXElementConstructor<any>>) => {
    return <div className={`app adssad ${theme}`}><StoryComponent /></div>
}