import {classNames} from 'shared/lib'
import {Button, ButtonTheme} from 'shared/ui/button/Button'
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
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            {t('Язык')}
        </Button>
    )
}

