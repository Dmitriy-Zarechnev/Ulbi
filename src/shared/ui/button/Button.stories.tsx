import {Button, ThemeButton} from './Button'
import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'


const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeButton: Story = {
    args: {
        children: 'Default Light Theme Button'
    }
}
export const DefaultDarkThemeButton: Story = {
    args: {
        children: 'Default Dark Theme Button'
    }
}
DefaultDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]


export const ClearLightThemeButton: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Clear Light Theme Button'
    }
}
export const ClearDarkThemeButton: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Clear Dark Theme Button'
    }
}
ClearDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]


export const OutlineLightThemeButton: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Outline Light Theme Button'
    }
}
export const OutlineDarkThemeButton: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Outline Dark Theme Button'
    }
}
OutlineDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]