import {Button, ThemeButton} from './Button'
import {Meta, StoryObj} from '@storybook/react'
import {StyleDecorator} from 'shared/config/storybook/styleDecorator/StyleDecorator'


const meta = {
    title: 'shared/ui/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    decorators: [StyleDecorator],
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const DefaultThemeButton: Story = {
    args: {
        children: 'Default Theme Button'
    }
}

export const ClearThemeButton: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Clear Theme Button'
    }
}

export const OutlineThemeButton: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Outline Theme Button'
    }
}