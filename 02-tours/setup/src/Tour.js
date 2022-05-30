import React, { useState } from "react";

const Tour = ({ id, name, info, image, price,removeTour }) => {
  const [readMore , setReadMore] = useState(false);
  return (
    <article>
      <img src={image} />
      <strong>{name}</strong>
      <p>{readMore?info:`${info.substring(0,200)}...`}
      <button className="btn" onClick={()=>setReadMore(!readMore)}>

        {readMore?"show less":"Read More"}
      </button>
      
      </p>
      <span>${price}</span>
      <button className="btn" onClick={()=>removeTour(id)}>Not Interested</button>
    </article>
  );
};

export default Tour;
