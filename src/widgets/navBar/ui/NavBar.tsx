import s from './NavBar.module.scss'
import {classNames} from 'shared/lib'


interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {

    return (
        <div className={classNames(s.navBar_wrapper, {}, [className])}>
            <div>Logo</div>

        </div>
    )
}


