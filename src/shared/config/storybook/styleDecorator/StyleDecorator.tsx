import 'app/styles/index.scss'
import {ReactNode} from 'react'

export const StyleDecorator = (Story: () => ReactNode) => {
    return <Story/>
}