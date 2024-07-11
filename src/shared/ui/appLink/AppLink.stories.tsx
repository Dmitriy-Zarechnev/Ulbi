import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import {AppLink, AppLinkTheme} from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/'
    }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>;


export const PrimaryLightThemeAppLink: Story = {
    args: {
        children: 'Primary Light Theme AppLink',
        theme: AppLinkTheme.PRIMARY
    }
}
export const PrimaryDarkThemeAppLink: Story = {
    args: {
        children: 'Primary Dark Theme AppLink',
        theme: AppLinkTheme.PRIMARY
    }
}
PrimaryDarkThemeAppLink.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryLightThemeAppLink: Story = {
    args: {
        children: 'Secondary Light Theme AppLink',
        theme: AppLinkTheme.SECONDARY
    }
}
export const SecondaryDarkThemeAppLink: Story = {
    args: {
        children: 'Secondary Dark Theme AppLink',
        theme: AppLinkTheme.SECONDARY
    }
}
SecondaryDarkThemeAppLink.decorators = [ThemeDecorator(Theme.DARK)]