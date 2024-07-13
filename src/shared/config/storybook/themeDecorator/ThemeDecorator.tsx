import {ReactNode} from 'react'
import {Theme, ThemeProvider} from 'app/providers/themeProvider'


export const ThemeDecorator = (theme: Theme) => (Story: () => ReactNode) => {

    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story/>
            </div>
        </ThemeProvider>
    )
}