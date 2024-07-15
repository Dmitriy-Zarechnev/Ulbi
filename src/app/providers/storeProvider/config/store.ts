import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from './stateSchema'
import {CounterReducer} from 'entities/counter'
import {UserReducer} from 'entities/user'


export function createReduxStore(initialState?: StateSchema) {

    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: UserReducer
    }


    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

