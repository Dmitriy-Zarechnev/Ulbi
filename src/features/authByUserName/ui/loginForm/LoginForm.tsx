import s from './LoginForm.module.scss'
import {classNames} from 'shared/lib'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/button'
import {Input} from 'shared/ui/input'

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(s.loginForm_wrapper, {}, [className])}>
            <Input/>
            <Input/>
            <Button className={s.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    )
}