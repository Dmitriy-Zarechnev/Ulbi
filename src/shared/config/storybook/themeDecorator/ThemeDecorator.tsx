import {ReactNode} from 'react'
import {Theme} from 'app/providers/themeProvider'



export const ThemeDecorator = (theme: Theme) => (Story: () => ReactNode) => {
    return (
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    )
}