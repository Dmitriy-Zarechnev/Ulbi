import {lazy} from 'react'

export const MainPageAsync = lazy(() => new Promise((resolve) => {
        setTimeout(() => {
            // @ts-ignore
            // Искусственная задержка
            resolve(import('./MainPage'))
        }, 1500)
    }
))