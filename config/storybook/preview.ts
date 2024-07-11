import type {Preview} from '@storybook/react'
import {StyleDecorator} from '../../src/shared/config/storybook/styleDecorator/StyleDecorator'
import {RouterDecorator} from '../../src/shared/config/storybook/routerDecorator/RouterDecorator'
import {ThemeDecorator} from '../../src/shared/config/storybook/themeDecorator/ThemeDecorator'
import {Theme} from '../../src/app/providers/themeProvider'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [StyleDecorator, RouterDecorator,ThemeDecorator(Theme.LIGHT)]
}


export default preview
