import s from './Button.module.scss'
import {classNames} from 'shared/lib'
import {ComponentPropsWithRef} from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ComponentPropsWithRef<'button'> {
    theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {
    const {className, children, theme, ...rest} = props

    return (
        <button className={classNames(s.button_wrapper, {}, [className, s[theme]])}
                {...rest}
        >
            {children}
        </button>
    )
}