import {createSlice} from '@reduxjs/toolkit'
import {CounterSchema} from 'entities/counter/model/types/counterSchema'

const initialState: CounterSchema = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    },

    selectors: {
        selectValue: (sliceState) => sliceState.value
    }
})


export const CounterActions = counterSlice.actions
export const CounterReducer = counterSlice.reducer
export const selectCounter = counterSlice.selectors


