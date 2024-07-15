import s from './NavBar.module.scss'
import {classNames} from 'shared/lib'
import {Button, ButtonTheme} from 'shared/ui/button'
import {useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {LoginModal} from 'features/authByUserName'


interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    const {t} = useTranslation()


    const [isAuthModal, setIsAuthModal] = useState<boolean>(false)


    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    return (
        <div className={classNames(s.navBar_wrapper, {}, [className])}>
            <div>Logo</div>

            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>{t('Войти')}</Button>

            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    )
}


