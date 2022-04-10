import React, { useState } from "react";

export const Counter = () => {

    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);

    return (
        <div>
            <h4>Counter App</h4>
            <p>Current count: <strong>{count}</strong></p>
            <button onClick={onIncrement}>+</button>
            &nbsp; &nbsp; 
            <button onClick={onDecrement}>-</button>
        </div>
    );
}