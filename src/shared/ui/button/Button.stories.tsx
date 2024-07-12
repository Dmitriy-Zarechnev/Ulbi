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

export const DefaultMLightThemeButton: Story = {
    args: {
        children: 'Default M Light Theme Button'
    }
}
export const DefaultMDarkThemeButton: Story = {
    args: {
        children: 'Default M Dark Theme Button'
    }
}
DefaultMDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultLLightThemeButton: Story = {
    args: {
        children: 'Default L Light Theme Button',
        size: ButtonSize.L
    }
}
export const DefaultLDarkThemeButton: Story = {
    args: {
        children: 'Default L Dark Theme Button',
        size: ButtonSize.L
    }
}
DefaultLDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const DefaultXLLightThemeButton: Story = {
    args: {
        children: 'Default XL Light Theme Button',
        size: ButtonSize.XL
    }
}
export const DefaultXLDarkThemeButton: Story = {
    args: {
        children: 'Default XL Dark Theme Button',
        size: ButtonSize.XL
    }
}
DefaultXLDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

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

export const MClearLightThemeButton: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'M Clear Light Theme Button'
    }
}
export const MClearDarkThemeButton: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'M Clear Dark Theme Button'
    }
}
MClearDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const LClearLightThemeButton: Story = {
    args: {
        size: ButtonSize.L,
        theme: ButtonTheme.CLEAR,
        children: 'L Clear Light Theme Button'
    }
}
export const LClearDarkThemeButton: Story = {
    args: {
        size: ButtonSize.L,
        theme: ButtonTheme.CLEAR,
        children: 'L Clear Dark Theme Button'
    }
}
LClearDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const XLClearLightThemeButton: Story = {
    args: {
        size: ButtonSize.XL,
        theme: ButtonTheme.CLEAR,
        children: 'XL Clear Light Theme Button'
    }
}
export const XLClearDarkThemeButton: Story = {
    args: {
        size: ButtonSize.XL,
        theme: ButtonTheme.CLEAR,
        children: 'XL Clear Dark Theme Button'
    }
}
XLClearDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

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

export const MOutlineLightThemeButton: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'M Outline Light Theme Button'
    }
}
export const MOutlineDarkThemeButton: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'M Outline Dark Theme Button'
    }
}
MOutlineDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const LOutlineLightThemeButton: Story = {
    args: {
        size: ButtonSize.L,
        theme: ButtonTheme.OUTLINE,
        children: 'L Outline Light Theme Button'
    }
}
export const LOutlineDarkThemeButton: Story = {
    args: {
        size: ButtonSize.L,
        theme: ButtonTheme.OUTLINE,
        children: 'L Outline Dark Theme Button'
    }
}
LOutlineDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const XLOutlineLightThemeButton: Story = {
    args: {
        size: ButtonSize.XL,
        theme: ButtonTheme.OUTLINE,
        children: 'XL Outline Light Theme Button'
    }
}
export const XLOutlineDarkThemeButton: Story = {
    args: {
        size: ButtonSize.XL,
        theme: ButtonTheme.OUTLINE,
        children: 'XL Outline Dark Theme Button'
    }
}
XLOutlineDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

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


// -------------- Background Button --------------
export const BackgroundLightThemeButton: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Background Light Theme Button'
    }
}
export const BackgroundDarkThemeButton: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Background Dark Theme Button'
    }
}
BackgroundDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const MBackgroundLightThemeButton: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'M Background Light Theme Button'
    }
}
export const MBackgroundDarkThemeButton: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'M Background Dark Theme Button'
    }
}
MBackgroundDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const LBackgroundLightThemeButton: Story = {
    args: {
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND,
        children: 'L Background Light Theme Button'
    }
}
export const LBackgroundDarkThemeButton: Story = {
    args: {
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND,
        children: 'L Background Dark Theme Button'
    }
}
LBackgroundDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const XLBackgroundLightThemeButton: Story = {
    args: {
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND,
        children: 'XL Background Light Theme Button'
    }
}
export const XLBackgroundDarkThemeButton: Story = {
    args: {
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND,
        children: 'XL Background Dark Theme Button'
    }
}
XLBackgroundDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareMBackgroundLightThemeButton: Story = {
    args: {
        square: true,
        theme: ButtonTheme.BACKGROUND,
        children: 'M'
    }
}
export const SquareMBackgroundDarkThemeButton: Story = {
    args: {
        square: true,
        theme: ButtonTheme.BACKGROUND,
        children: 'M'
    }
}
SquareMBackgroundDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareLBackgroundLightThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND,
        children: 'L'
    }
}
export const SquareLBackgroundDarkThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND,
        children: 'L'
    }
}
SquareLBackgroundDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareXLBackgroundLightThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND,
        children: 'XL'
    }
}
export const SquareXLBackgroundDarkThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND,
        children: 'XL'
    }
}
SquareXLBackgroundDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]


// -------------- Background_Inverted Button --------------
export const BackgroundInvertedLightThemeButton: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Background Inverted Light Theme Button'
    }
}
export const BackgroundInvertedDarkThemeButton: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Background Inverted Dark Theme Button'
    }
}
BackgroundInvertedDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const MBackgroundInvertedLightThemeButton: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'M Background Inverted Light Theme Button'
    }
}
export const MBackgroundInvertedDarkThemeButton: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'M Background Inverted Dark Theme Button'
    }
}
MBackgroundInvertedDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const LBackgroundInvertedLightThemeButton: Story = {
    args: {
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'L Background Inverted Light Theme Button'
    }
}
export const LBackgroundInvertedDarkThemeButton: Story = {
    args: {
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'L Background Inverted Dark Theme Button'
    }
}
LBackgroundInvertedDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const XLBackgroundInvertedLightThemeButton: Story = {
    args: {
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'XL Background Inverted Light Theme Button'
    }
}
export const XLBackgroundInvertedDarkThemeButton: Story = {
    args: {
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'XL Background Inverted Dark Theme Button'
    }
}
XLBackgroundInvertedDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareMBackgroundInvertedLightThemeButton: Story = {
    args: {
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'M'
    }
}
export const SquareMBackgroundInvertedDarkThemeButton: Story = {
    args: {
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'M'
    }
}
SquareMBackgroundInvertedDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareLBackgroundInvertedLightThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'L'
    }
}
export const SquareLBackgroundInvertedDarkThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'L'
    }
}
SquareLBackgroundInvertedDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareXLBackgroundInvertedLightThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'XL'
    }
}
export const SquareXLBackgroundInvertedDarkThemeButton: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'XL'
    }
}
SquareXLBackgroundInvertedDarkThemeButton.decorators = [ThemeDecorator(Theme.DARK)]