import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import {Modal} from './Modal'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        isOpen: true
    }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeModal: Story = {
    args: {
        children: 'Default Light Theme Modal'
    }
}
export const DefaultDarkThemeModal: Story = {
    args: {
        children: 'Default Dark Theme Modal'
    }
}
DefaultDarkThemeModal.decorators = [ThemeDecorator(Theme.DARK)]