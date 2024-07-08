import s from './LangSwitcher.module.scss'
import {classNames} from 'shared/lib'
import {Button, ThemeButton} from 'shared/ui/button/Button'
import {useTranslation} from 'react-i18next'


interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggleLocalesHandler = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button onClick={toggleLocalesHandler}
            theme={ThemeButton.CLEAR}
            className={classNames(s.langSwitcher_wrapper, {}, [className])}
        >
            {t('Язык')}
        </Button>
    )
}

