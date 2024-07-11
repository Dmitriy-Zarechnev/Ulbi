import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import {ThemeSwitcher} from './ThemeSwitcher'

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeThemeSwitcher: Story = {
    args: {}
}
export const DefaultDarkThemeThemeSwitcher: Story = {
    args: {}
}
DefaultDarkThemeThemeSwitcher.decorators = [ThemeDecorator(Theme.DARK)]