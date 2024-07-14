import {Button} from 'shared/ui/button/Button'
import {useDispatch, useSelector} from 'react-redux'
import {CounterActions, selectCounter} from '../model/slice/counterSlice'


export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(selectCounter.selectValue)

    const increment = () => {
        dispatch(CounterActions.increment())
    }

    const decrement = () => {
        dispatch(CounterActions.decrement())
    }

    return (
        <div>
            <h1>{counterValue}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    )
}