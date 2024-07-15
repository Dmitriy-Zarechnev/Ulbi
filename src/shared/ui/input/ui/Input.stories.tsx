import {Meta, StoryObj} from '@storybook/react'
import {Input} from './Input'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeInput: Story = {
    args: {
        placeholder: 'Default Light Theme Input'
    }
}

export const DefaultDarkThemeInput: Story = {
    args: {
        placeholder: 'Default Dark Theme Input'
    }
}
DefaultDarkThemeInput.decorators = [ThemeDecorator(Theme.DARK)]