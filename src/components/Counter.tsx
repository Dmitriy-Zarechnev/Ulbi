import {useState} from 'react'
import s from './Counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <div>
            <span className={s.counter}>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>increment</button>
            <button onClick={() => setCounter(counter - 1)}>decrement</button>
        </div>
    )
}

