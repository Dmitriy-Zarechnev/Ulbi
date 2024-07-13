import s from './NavBar.module.scss'
import {classNames} from 'shared/lib'
import {Button, ButtonTheme} from 'shared/ui/button/Button'
import {Modal} from 'shared/ui/modal'
import {useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'


interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    const {t} = useTranslation()


    const [isAuthModal, setIsAuthModal] = useState<boolean>(false)


    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={classNames(s.navBar_wrapper, {}, [className])}>
            <div>Logo</div>

            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>{t('Войти')}</Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam at ipsum itaque odio quod reprehenderit sed. Ab, dolor dolorem doloremque exercitationem
                laboriosam magnam soluta tenetur ullam?
            </Modal>

        </div>
    )
}


