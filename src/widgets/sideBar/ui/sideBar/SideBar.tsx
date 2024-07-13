import s from './SideBar.module.scss'
import {classNames} from 'shared/lib'
import {ComponentPropsWithRef, useState} from 'react'
import {ThemeSwitcher} from 'shared/ui/themeSwitcher'
import {LangSwitcher} from 'shared/ui/langSwitcher'
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/button/Button'
import {AppLink, AppLinkTheme} from 'shared/ui/appLink/AppLink'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'

import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'


interface SideBarProps extends ComponentPropsWithRef<'div'> {
}

export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggleHandler = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            data-testid={'sideBar'}
            className={classNames(s.sideBar_wrapper, {[s.collapsed]: collapsed}, [className])}>

            <Button
                data-testid={'sideBar-toggle'}
                onClick={onToggleHandler}
                className={s.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={s.links}>

                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={s.link}
                >
                    <MainIcon className={s.icon}/>
                    {!collapsed ? 'Main' : ''}
                </AppLink>

                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={s.link}
                >
                    <AboutIcon className={s.icon}/>
                    {!collapsed ? 'About' : ''}
                </AppLink>
            </div>

            <div className={s.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    )
}

