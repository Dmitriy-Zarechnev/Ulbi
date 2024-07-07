import React, {Suspense} from 'react'
import {Counter} from './components/Counter'
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPageAsync} from './pages/aboutPage/AboutPage.async'
import {MainPageAsync} from './pages/mainPage/MainPage.async'
import {useTheme} from './styles/theme/useTheme'
import {classNames} from './helpers/classNames/classNames'


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
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    )
}

export default App