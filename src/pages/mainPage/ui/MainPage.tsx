import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/input'
import {useState} from 'react'


const MainPage = () => {
    const {t} = useTranslation('main')

    const [value, setValue] = useState('')


    const onChange = (value: string) => {
        setValue(value)
    }
    return (
        <div>
            {t('Главная страница')}
            <Input
                value={value}
                onValueChange={onChange}
                placeholder={'My Placeholder'}
            />
        </div>
    )
}

export default MainPage
