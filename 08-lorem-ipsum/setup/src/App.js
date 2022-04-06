import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [texts, setText] = useState([]);

  const textSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <>
      <section className="section-center">
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className="lorem-form">
          <label>Paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amoutn"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" onClick={textSubmit} className="btn">
            generate
          </button>
        </form>
        <article className="lorem-text">
          {texts.map((line, index) => {
            return <p key={index}> {line} </p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
