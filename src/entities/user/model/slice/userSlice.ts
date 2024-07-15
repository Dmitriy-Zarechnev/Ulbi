import {createSlice} from '@reduxjs/toolkit'
import {UserSchema} from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'entities/user',
    initialState,
    reducers: {},

    selectors: {
        //selectValue: (sliceState) => sliceState.value
    }
})


export const UserActions = userSlice.actions
export const UserReducer = userSlice.reducer
export const SelectUser = userSlice.selectors
