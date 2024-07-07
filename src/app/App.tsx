import './styles/index.scss'
import {useTheme} from 'app/providers/themeProvider'

import {classNames} from 'shared/lib'
import {AppRouter} from 'app/providers/router'
import {NavBar} from 'widgets/navBar'


const App = () => {
    // ---- Hook для работы с theme ----
    const {theme, toggleTheme} = useTheme()


    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <NavBar/>
            <AppRouter/>
        </div>
    )
}

export default App