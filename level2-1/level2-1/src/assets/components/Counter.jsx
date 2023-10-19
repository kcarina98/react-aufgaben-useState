import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <section>
      <h1>COUNTER</h1>
      <p>{count}</p>
      <button onClick={() => setCounter(count + 1)}>+</button>
      <button onClick={() => setCounter(count - 1)}>-</button>
    </section>
  );
};

export default Counter;
