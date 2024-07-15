import {Button} from 'shared/ui/button/ui/Button'
import {useDispatch, useSelector} from 'react-redux'
import {CounterActions, SelectCounter} from '../model/slice/counterSlice'


export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(SelectCounter.selectValue)

    const increment = () => {
        dispatch(CounterActions.increment())
    }

    const decrement = () => {
        dispatch(CounterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid={'value-title'}>{counterValue}</h1>
            <Button onClick={increment} data-testid={'increment-btn'}>Increment</Button>
            <Button onClick={decrement} data-testid={'decrement-btn'}>Decrement</Button>
        </div>
    )
}