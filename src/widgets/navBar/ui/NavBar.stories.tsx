import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import {Meta, StoryObj} from '@storybook/react'
import {NavBar} from './NavBar'


const meta = {
    title: 'widgets/navBar/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeNavBar: Story = {
    args: {}
}
export const DefaultDarkThemeNavBar: Story = {
    args: {}
}
DefaultDarkThemeNavBar.decorators = [ThemeDecorator(Theme.DARK)]