import s from './NotFoundPage.module.scss'
import {classNames} from 'shared/lib'
import {useTranslation} from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(s.notFoundPage_wrapper, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    )
}