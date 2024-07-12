import {Button, ButtonSize, ButtonTheme} from './Button'
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

// -------------- Default Button --------------
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

export const DefaultSquareMLightThemeButton: Story = {
    args: {
        square: true,
        children: 'M'
    }
}
export const DefaultSquareMDarkThemeButton: Story = {
    args: {
        square: true,
        children: 'M'
    }
}
DefaultSquareMDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultSquareLLightThemeButton: Story = {
    args: {
        square: true,
        children: 'L',
        size: ButtonSize.L
    }
}
export const DefaultSquareLDarkThemeButton: Story = {
    args: {
        square: true,
        children: 'L',
        size: ButtonSize.L
    }
}
DefaultSquareLDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultSquareXLLightThemeButton: Story = {
    args: {
        square: true,
        children: 'XL',
        size: ButtonSize.XL
    }
}
export const DefaultSquareXLDarkThemeButton: Story = {
    args: {
        square: true,
        children: 'XL',
        size: ButtonSize.XL
    }
}
DefaultSquareXLDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]


// -------------- Clear Button --------------
export const ClearLightThemeButton: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Clear Light Theme Button'
    }
}
export const ClearDarkThemeButton: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Clear Dark Theme Button'
    }
}
ClearDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareMClearLightThemeButton: Story = {
    args: {
        square: true,
        theme: ButtonTheme.CLEAR,
        children: 'M'
    }
}
export const SquareMClearDarkThemeButton: Story = {
    args: {
        square: true,
        theme: ButtonTheme.CLEAR,
        children: 'M'
    }
}
SquareMClearDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareLClearLightThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.CLEAR,
        children: 'L'
    }
}
export const SquareLClearDarkThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.CLEAR,
        children: 'L'
    }
}
SquareLClearDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareXLClearLightThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.CLEAR,
        children: 'XL'
    }
}
export const SquareXLClearDarkThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.CLEAR,
        children: 'XL'
    }
}
SquareXLClearDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

// -------------- Outline Button --------------
export const OutlineLightThemeButton: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline Light Theme Button'
    }
}
export const OutlineDarkThemeButton: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline Dark Theme Button'
    }
}
OutlineDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareMOutlineLightThemeButton: Story = {
    args: {
        square: true,
        theme: ButtonTheme.OUTLINE,
        children: 'M'
    }
}
export const SquareMOutlineDarkThemeButton: Story = {
    args: {
        square: true,
        theme: ButtonTheme.OUTLINE,
        children: 'M'
    }
}
SquareMOutlineDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareLOutlineLightThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.OUTLINE,
        children: 'L'
    }
}
export const SquareLOutlineDarkThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.OUTLINE,
        children: 'L'
    }
}
SquareLOutlineDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareXLOutlineLightThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.OUTLINE,
        children: 'XL'
    }
}
export const SquareXLOutlineDarkThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.OUTLINE,
        children: 'XL'
    }
}
SquareXLOutlineDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]