import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [redMore, setRedMore] = useState(false);
  return (
    <>
      <article className="single-tour">
        <img src={image} alt="image" />

        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <span className="tour-price">${price}</span>
          </div>

          <p>
            {redMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setRedMore(!redMore)}>
              {redMore ? "show less" : "read more"}
            </button>
          </p>
          <button onClick={() => removeTour(id)} className="delete-btn">
            Not Intersted
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
