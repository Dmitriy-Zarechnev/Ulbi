import {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import {LoginForm} from './LoginForm'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeLoginForm: Story = {}
export const DefaultDarkThemeLoginForm: Story = {}
DefaultDarkThemeLoginForm.decorators = [ThemeDecorator(Theme.DARK)]