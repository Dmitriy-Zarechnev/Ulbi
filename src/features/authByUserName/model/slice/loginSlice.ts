import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoginSchema} from '../types/loginSchema'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'features/login',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },

    selectors: {
        selectUsername: (sliceState) => sliceState.username,
        selectPassword: (sliceState) => sliceState.password
    }
})


export const LoginActions = loginSlice.actions
export const LoginReducer = loginSlice.reducer
export const LoginSelectors = loginSlice.selectors