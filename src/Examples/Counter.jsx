import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counter/counter.slice'


export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const message = useSelector((state) => state.counter.message)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>{message}</h1>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment("increment"))}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement('decrement'))}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}