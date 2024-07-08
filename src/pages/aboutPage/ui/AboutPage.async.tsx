import {lazy} from 'react'

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        // Искусственная задержка
        resolve(import('./AboutPage'))
    },  1500)
}
))