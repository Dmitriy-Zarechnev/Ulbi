import {Button} from 'shared/ui/button/ui/Button'
import {useTranslation} from 'react-i18next'
import {useEffect, useState} from 'react'

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const {t} = useTranslation()
    const [error, setError] = useState(false)


    const throwHandler = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error()
        }

    }, [error])

    return (
        <Button
            onClick={throwHandler}
        >
            {t('throw Error')}
        </Button>
    )
}