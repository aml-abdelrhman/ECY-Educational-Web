import React, { useState, useMemo, useCallback } from "react";
import Child from "./components/Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // ✅ useMemo: نحسب حاجة تقيلة مرة واحدة بس
  const doubleNumber = useMemo(() => {
    console.log("Calculating double...");
    return number * 2;
  }, [number]);

  // ✅ useCallback: نخلي المرجع ثابت عشان Child ما يعملش re-render
  const handleClick = useCallback(() => {
    console.log("Child clicked");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <h2>Double: {doubleNumber}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <Child onClick={handleClick} />
    </div>
  );
}
