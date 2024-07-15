import s from './Input.module.scss'
import {classNames} from 'shared/lib'
import {ChangeEvent, ComponentPropsWithRef, memo, useEffect, useRef, useState} from 'react'


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
        autoFocus,
        ...rest
    } = props

    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [caretPosition, setCaretPosition] = useState(0)

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autoFocus])



    const onValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onValueChange?.(e.currentTarget.value)
        setCaretPosition(Number(e.currentTarget.value.length))
    }

    const onBlurHandler = () => {
        setIsFocused(false)
    }

    const onFocusHandler = () => {
        setIsFocused(true)
    }

    const onSelectHandler = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
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
                    ref={ref}
                    className={s.input}
                    value={value}
                    onChange={onValueChangeHandler}
                    type={type}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    onSelect={onSelectHandler}
                    {...rest}/>

                {isFocused && (
                    <span
                        className={s.caret}
                        style={{left: `${caretPosition * 9}px`}}
                    />)}
            </div>
        </div>
    )
})