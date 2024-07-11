import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import AboutPage from './AboutPage'

const meta = {
    title: 'pages/aboutPage/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeAboutPage: Story = {
    args: {}
}
export const DefaultDarkThemeAboutPage: Story = {
    args: {}
}
DefaultDarkThemeAboutPage.decorators = [ThemeDecorator(Theme.DARK)]