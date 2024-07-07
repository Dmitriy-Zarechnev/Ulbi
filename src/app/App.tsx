import React, {Suspense} from 'react'
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {useTheme} from 'app/providers/themeProvider'
import {AboutPage} from 'pages/aboutPage'
import {MainPage} from 'pages/mainPage'
import {classNames} from 'shared/lib'


const App = () => {
    // ---- Hook для работы с theme ----
    const {theme, toggleTheme} = useTheme()


    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App