import s from './SideBar.module.scss'
import {classNames} from 'shared/lib'
import {ComponentPropsWithRef, useState} from 'react'
import {ThemeSwitcher} from 'shared/ui/themeSwitcher'
import {LangSwitcher} from 'shared/ui/langSwitcher'
import {Button} from 'shared/ui/button/Button'


interface SideBarProps extends ComponentPropsWithRef<'div'> {
}

export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggleHandler = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div data-testid={'sideBar'}
            className={classNames(s.sideBar_wrapper, {[s.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggleHandler}>Toggle</Button>
            <div className={s.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}

