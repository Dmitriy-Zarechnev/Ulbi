import {classNames} from 'shared/lib'
import {Button, ButtonTheme} from 'shared/ui/button/Button'
import {useTranslation} from 'react-i18next'


interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = ({className, short}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggleLocalesHandler = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            onClick={toggleLocalesHandler}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    )
}

