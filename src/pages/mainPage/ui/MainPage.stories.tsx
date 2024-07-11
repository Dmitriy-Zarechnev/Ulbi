import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import MainPage from './MainPage'

const meta = {
    title: 'pages/mainPage/MainPage',
    component: MainPage,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeMainPage: Story = {
    args: {}
}
export const DefaultDarkThemeMainPage: Story = {
    args: {}
}
DefaultDarkThemeMainPage.decorators = [ThemeDecorator(Theme.DARK)]