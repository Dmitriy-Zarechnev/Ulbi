import {classNames} from 'shared/lib'
import {ReactNode} from 'react'
import {createPortal} from 'react-dom'

interface PortalProps {
    // Что мы отправляем
    children: ReactNode
    // Куда мы отправляем
    element?: HTMLElement
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body
    } = props

    return createPortal(children, element)
}