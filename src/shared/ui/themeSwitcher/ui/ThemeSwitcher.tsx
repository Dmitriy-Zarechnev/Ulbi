import s from './ThemeSwitcher.module.scss'
import {classNames} from 'shared/lib'
import {Theme, useTheme} from 'app/providers/themeProvider'
import LightIcon from 'shared/assets/icons/themeLight.svg'
import DarkIcon from 'shared/assets/icons/themeDark.svg'
import {Button, ThemeButton} from 'shared/ui/button/Button'


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    // ---- Hook для работы с theme ----
    const {theme, toggleTheme} = useTheme()

    return (
        <Button onClick={toggleTheme}
                theme={ThemeButton.CLEAR}
                className={classNames(s.themeSwitcher_wrapper, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
}
