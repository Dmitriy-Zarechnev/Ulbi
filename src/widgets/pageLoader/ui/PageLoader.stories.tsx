import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import {PageLoader} from './PageLoader'

const meta = {
    title: 'widgets/pageLoader/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemePageLoader: Story = {
    args: {}
}
export const DefaultDarkThemePageLoader: Story = {
    args: {}
}
DefaultDarkThemePageLoader.decorators = [ThemeDecorator(Theme.DARK)]