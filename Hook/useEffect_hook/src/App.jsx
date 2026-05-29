import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  async function getQuote() {
    const response = await fetch("https://dummyjson.com/quotes/random");

    const data = await response.json();

    setQuote(data.quote);
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>

      <p>{quote}</p>

      <button onClick={getQuote}>New Quote</button>
    </div>
  );
}

export default App;
