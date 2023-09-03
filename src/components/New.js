import React, { useState } from "react";

const New = function () {
  const [state, setState] = useState(0);

  function decrement() {
    setState(state - 1);
  }

  function increment() {
    setState(state + 1);
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default New;
