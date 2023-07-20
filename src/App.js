import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./actions/index"
import { singIn, singOut } from "./actions/isLoggedAction"

function App() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)

    const dispatch = useDispatch()

    return (
        <div className="App">
            <div>
                <h1>Counter: {counter}</h1>
                <h1>Is Logged: {isLogged.toString()}</h1>
            </div>
            <div>
                <button onClick={() => dispatch(increment(5))}>+</button>
                <button onClick={() => dispatch(decrement(1))}>-</button>
            </div>

            <div>
                <button onClick={() => dispatch(singIn())}>Sign In</button>
                <button onClick={() => dispatch(singOut())}>Sing Out</button>
            </div>

            {isLogged ? <h3>Valuable Information I Shouldn't See</h3> : null}
        </div>
    );
}

export default App;