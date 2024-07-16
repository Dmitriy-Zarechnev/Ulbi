import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoginSchema} from '../types/loginSchema'
import {loginByUsername} from '../services/loginByUsername/loginByUsername'

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
    extraReducers: builder => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },

    selectors: {
        selectUsername: (sliceState): string => sliceState.username,

        selectPassword: (sliceState): string => sliceState.password
    }
})


export const LoginActions = loginSlice.actions
export const LoginReducer = loginSlice.reducer
export const LoginSelectors = loginSlice.selectors