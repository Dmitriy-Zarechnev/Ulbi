import s from './Input.module.scss'
import {classNames} from 'shared/lib'
import {ChangeEvent, ComponentPropsWithRef, memo} from 'react'


interface InputProps extends ComponentPropsWithRef<'input'> {
    onValueChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onValueChange,
        value,
        type = 'text',
        placeholder,
        ...rest
    } = props

    const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onValueChange?.(e.currentTarget.value)
    }


    return (
        <div className={classNames(s.input_wrapper, {}, [className])}>
            {placeholder &&
                (<div
                    className={s.placeholder}
                >
                    {`${placeholder} >`}
                </div>)
            }
            <div className={s.caret_wrapper}>
                <input
                    className={s.input}
                    value={value}
                    onChange={onValueChangeHandler}
                    type={type}
                    {...rest}/>
                <span className={s.caret}/>
            </div>
        </div>
    )
})