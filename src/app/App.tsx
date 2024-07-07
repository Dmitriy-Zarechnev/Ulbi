import './styles/index.scss'
import {Link} from 'react-router-dom'
import {useTheme} from 'app/providers/themeProvider'

import {classNames} from 'shared/lib'
import {AppRouter} from 'app/providers/router'


const App = () => {
    // ---- Hook для работы с theme ----
    const {theme, toggleTheme} = useTheme()


    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter/>
        </div>
    )
}

export default App