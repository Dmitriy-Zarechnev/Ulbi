import {ReactNode} from 'react'
import {BrowserRouter} from 'react-router-dom'

export const RouterDecorator = (Story: () => ReactNode) => {
    return (
        <BrowserRouter>
            <Story/>
        </BrowserRouter>
    )
}