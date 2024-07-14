import {componentRender} from 'shared/config/tests/componentRender/ComponentRender'
import {screen} from '@testing-library/react'
import {Counter} from './Counter'
import userEvent from '@testing-library/user-event';


describe('Counter tests', () => {
    test('check counter render', () => {
        componentRender(<Counter/>, {initialState: {counter: {value: 10}}})
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    test('increment counter', () => {
        componentRender(<Counter/>, {initialState: {counter: {value: 10}}})

        userEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    test('decrement counter', () => {
        componentRender(<Counter/>, {initialState: {counter: {value: 10}}})

        userEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })
})