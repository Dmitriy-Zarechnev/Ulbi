import {useTheme} from 'app/providers/themeProvider'
import {classNames} from 'shared/lib'
import {AppRouter} from 'app/providers/router'
import {NavBar} from 'widgets/navBar'
import {SideBar} from 'widgets/sideBar'
import {Suspense} from 'react'


const App = () => {
    // ---- Hook для работы с theme ----
    const {theme} = useTheme()


    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <NavBar/>
                <div className={'contentPage'}>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App