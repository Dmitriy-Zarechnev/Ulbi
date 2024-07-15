import {classNames} from 'shared/lib'
import {Theme, useTheme} from 'app/providers/themeProvider'
import LightIcon from 'shared/assets/icons/themeLight.svg'
import DarkIcon from 'shared/assets/icons/themeDark.svg'
import {Button, ButtonTheme} from '../../button'


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    // ---- Hook для работы с theme ----
    const {theme, toggleTheme} = useTheme()

    return (
        <Button onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
}
