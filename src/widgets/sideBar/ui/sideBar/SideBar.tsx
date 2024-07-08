import s from './SideBar.module.scss'
import {classNames} from 'shared/lib'
import {useState} from 'react'
import {ThemeSwitcher} from 'shared/ui/themeSwitcher'


interface SideBarProps {
    className?: string
}

export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggleHandler = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(s.sideBar_wrapper, {[s.collapsed]: collapsed}, [className])}>
            <button onClick={onToggleHandler}>Toggle</button>
            <div className={s.switchers}>
                <ThemeSwitcher/>
            </div>

        </div>
    )
}

