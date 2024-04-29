
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/counter/counter.actions';


function Counter() {
    const dispatch = useDispatch();
    const message = useSelector((store) => store.message);
    const counter = useSelector((store) => store.counter);



    return (
        <>
            <div>
                <h2>counter : {counter}</h2>
                <h2>message : {message}</h2>

            </div>
            <div style={{ display: "flex", gap: "20px" }}>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </>
    )
}

export default Counter
