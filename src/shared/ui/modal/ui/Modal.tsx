import s from './Modal.module.scss'
import {classNames} from 'shared/lib'
import {ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import {Portal} from 'shared/ui/portal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300


export const Modal = (props: ModalProps) => {
    const {className, children, isOpen, onClose} = props
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()


    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])


    return (
        <Portal>
            <div className={classNames(s.modal_wrapper, mods, [className])}>
                <div className={s.overlay} onClick={closeHandler}>
                    <div className={s.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}