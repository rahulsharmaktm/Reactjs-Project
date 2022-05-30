import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amout = parseInt(count);

    if (count <= 0) {
      amout = 0;
    }
    if (count > 8) {
      amout = 8;
    }
    setText(data.slice(0, amout));
  };

  return (
    <>
      <section className="section-center">
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className="lore-form" onSubmit={handleSubmit}>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn">button</button>
        </form>

        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
