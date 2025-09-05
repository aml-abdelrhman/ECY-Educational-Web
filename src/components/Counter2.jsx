import React from "react";
import { useCounter } from "./useCounter";

function Counter2() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>Counter 2: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter2;
