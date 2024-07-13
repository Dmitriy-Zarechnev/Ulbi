import s from './Button.module.scss'
import {classNames} from 'shared/lib'
import {ComponentPropsWithRef} from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ComponentPropsWithRef<'button'> {
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        size = ButtonSize.M,
        square,
        theme,
        onClick,
        type = 'button',
        ...rest
    } = props

    const mods: Record<string, boolean> = {
        [s.square]: square
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames(s.button_wrapper, mods, [className, s[theme], s[size]])}
            {...rest}
        >
            {children}
        </button>
    )
}