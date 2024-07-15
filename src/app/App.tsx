import {classNames} from 'shared/lib'
import {AppRouter} from 'app/providers/router'
import {NavBar} from 'widgets/navBar'
import {SideBar} from 'widgets/sideBar'
import {Suspense} from 'react'


const App = () => {


    return (
        <div className={classNames('app', {}, [])}>
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