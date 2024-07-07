import {createContext} from 'react'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

// ---- Создали контекст ----
export const ThemeContext = createContext<ThemeContextProps>({})

// ---- Ключ для local storage ----
export const LOCAL_STORAGE_THEME_KEY = 'theme'