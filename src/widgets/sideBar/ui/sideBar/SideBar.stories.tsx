import {ThemeDecorator} from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/themeProvider'
import {Meta, StoryObj} from '@storybook/react'
import {SideBar} from './SideBar'


const meta = {
    title: 'widgets/sideBar/SideBar',
    component: SideBar,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof SideBar>

export default meta
type Story = StoryObj<typeof meta>;


export const DefaultLightThemeSideBar: Story = {
    args: {}
}
export const DefaultDarkThemeSideBar: Story = {
    args: {}
}
DefaultDarkThemeSideBar.decorators = [ThemeDecorator(Theme.DARK)]