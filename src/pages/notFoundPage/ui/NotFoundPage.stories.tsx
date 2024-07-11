import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import {NotFoundPage} from './NotFoundPage'

const meta = {
    title: 'pages/notFoundPage/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeNotFoundPage: Story = {
    args: {}
}
export const DefaultDarkThemeNotFoundPage: Story = {
    args: {}
}
DefaultDarkThemeNotFoundPage.decorators = [ThemeDecorator(Theme.DARK)]