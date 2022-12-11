import React, { useState } from "react";
import Button from "./Button";
import "./assets/css/style.css";
import Reorder from "./Reorder";

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let reorderCount = () => {
    setCount(count + 5);
  };

  let resetCount = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
          <div class="buttons">
            <Button title={"-"} action={decrementCount} />
            <Button title={"+"} action={incrementCount} />
            {count == 0 && <Reorder title={"Reorder"} action={reorderCount} />}
          </div>
        </div>
      </div>
    </div>
  );
}
