import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h3>Use of useState Hook</h3>

      <div className="main">
        <h4>Counter Value: {counter}</h4>

        <button onClick={increase}>+1</button>

        <br /><br />

        <button onClick={decrease}>-1</button>
      </div>
    </>
  );
}

export default App;