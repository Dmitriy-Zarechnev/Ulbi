import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import {Loader} from './Loader'

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeLoader: Story = {
    args: {}
}
export const DefaultDarkThemeLoader: Story = {
    args: {}
}
DefaultDarkThemeLoader.decorators = [ThemeDecorator(Theme.DARK)]