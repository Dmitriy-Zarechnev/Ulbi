import {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routeConfig} from 'shared/config/routeConfig/routeConfig'
import {PageLoader} from 'widgets/pageLoader'


export const AppRouter = () => {

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => {
                    return <Route key={path} path={path} element={<div className={'pageWrapper'}>{element}</div>}/>
                })}
            </Routes>
        </Suspense>
    )
}

