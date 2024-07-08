import s from './NavBar.module.scss'
import {classNames} from 'shared/lib'
import {ThemeSwitcher} from 'shared/ui/themeSwitcher'
import {AppLink, AppLinkTheme} from 'shared/ui/appLink/AppLink'

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {

    return (
        <div className={classNames(s.navBar_wrapper, {}, [className])}>
            <div>Logo</div>
            <ThemeSwitcher/>
            <div className={s.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    )
}


