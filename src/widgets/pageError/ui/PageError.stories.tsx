import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import {PageError} from './PageError'

const meta = {
    title: 'widgets/pageError/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemePageError: Story = {
    args: {}
}
export const DefaultDarkThemePageError: Story = {
    args: {}
}
DefaultDarkThemePageError.decorators = [ThemeDecorator(Theme.DARK)]