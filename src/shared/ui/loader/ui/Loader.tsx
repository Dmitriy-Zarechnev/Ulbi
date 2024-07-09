import s from './Loader.module.scss'
import {classNames} from 'shared/lib'

interface LoaderProps {
    className?: string
}

export const Loader = ({className}: LoaderProps) => {

    return (
        <div className={classNames(s.lds_hourglass, {}, [className])}></div>
    )
}