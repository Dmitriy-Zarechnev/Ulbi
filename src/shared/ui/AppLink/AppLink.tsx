import s from './AppLink.module.scss'
import {classNames} from 'shared/lib'
import {Link, LinkProps} from 'react-router-dom'


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}


interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...rest
    } = props

    return (
        <Link to={to}
              className={classNames(s.appLink_wrapper, {}, [className, s[theme]])}
              {...rest}
        >
            {children}
        </Link>
    )
}