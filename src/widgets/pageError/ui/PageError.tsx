import s from './PageError.module.scss'
import {classNames} from 'shared/lib'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/button/Button'

interface ErrorPageProps {
    className?: string
}

export const PageError = ({className}: ErrorPageProps) => {
    const {t} = useTranslation()

    const reloadPageHandler = () => {
        location.reload()
    }

    return (
        <div className={classNames(s.errorPage_wrapper, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPageHandler}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}