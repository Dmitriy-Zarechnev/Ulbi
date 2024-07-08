import './styles/index.scss'
import {useTheme} from 'app/providers/themeProvider'
import {classNames} from 'shared/lib'
import {AppRouter} from 'app/providers/router'
import {NavBar} from 'widgets/navBar'
import {SideBar} from 'widgets/sideBar'


const App = () => {
    // ---- Hook для работы с theme ----
    const {theme} = useTheme()


    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <div className={'contentPage'}>
                <SideBar/>
                <AppRouter />
            </div>
        </div>
    )
}

export default App