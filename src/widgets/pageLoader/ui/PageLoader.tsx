import s from './PageLoader.module.scss'
import {classNames} from 'shared/lib'
import {Loader} from 'shared/ui/loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({className}: PageLoaderProps) => {

    return (
        <div className={classNames(s.pageLoader_wrapper, {}, [className])}>
            <Loader/>
        </div>
    )
}