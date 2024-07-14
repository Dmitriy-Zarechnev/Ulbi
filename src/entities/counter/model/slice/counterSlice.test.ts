import {CounterReducer, CounterActions} from './counterSlice'
import {CounterSchema} from '../types/counterSchema'

describe('counter slice', () => {
    test('check decrement action', () => {
        const state: CounterSchema = {
            value: 10
        }
        expect(
            CounterReducer(state as CounterSchema,
                CounterActions.decrement())
        ).toEqual({value: 9})
    })

    test('check increment action', () => {
        const state: CounterSchema = {
            value: 10
        }
        expect(
            CounterReducer(state as CounterSchema,
                CounterActions.increment())
        ).toEqual({value: 11})
    })

    test('state is empty', () => {
        expect(
            CounterReducer(undefined,
                CounterActions.increment())
        ).toEqual({value: 1})
    })
})