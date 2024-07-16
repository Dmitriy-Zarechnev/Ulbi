import s from './LoginForm.module.scss'
import {classNames} from 'shared/lib'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from 'shared/ui/button'
import {Input} from 'shared/ui/input'
import {useDispatch, useSelector} from 'react-redux'
import {memo, useCallback} from 'react'
import {LoginActions, LoginSelectors} from '../../model/slice/loginSlice'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()

    const loginPassword = useSelector(LoginSelectors.selectPassword)
    const loginUsername = useSelector(LoginSelectors.selectUsername)


    const onChangeUsername = useCallback((value: string) => {
        dispatch(LoginActions.setUserName(value))
    }, [dispatch])


    const onChangePassword = useCallback((value: string) => {
        dispatch(LoginActions.setPassword(value))
    }, [dispatch])

    const onLoginClickHandler = useCallback(() => {
        //dispatch(loginByUsername({username, password}))
    }, [dispatch])


    return (
        <div className={classNames(s.loginForm_wrapper, {}, [className])}>
            <Input
                placeholder={t('Введите username')}
                autoFocus
                value={loginUsername}
                onValueChange={onChangeUsername}/>
            <Input
                placeholder={t('Введите пароль')}
                value={loginPassword}
                onValueChange={onChangePassword}/>
            <Button
                theme={ButtonTheme.OUTLINE}
                className={s.loginBtn}
                onClick={onLoginClickHandler}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})