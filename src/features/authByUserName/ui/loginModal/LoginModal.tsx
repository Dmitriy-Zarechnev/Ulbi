import s from './LoginModal.module.scss'
import {classNames} from 'shared/lib'
import {Modal} from 'shared/ui/modal'
import {LoginForm} from '../loginForm/LoginForm'

interface LoginModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose
    } = props
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(s.loginModal_wrapper, {}, [className])}
            lazy
        >
            <LoginForm/>
        </Modal>
    )
}