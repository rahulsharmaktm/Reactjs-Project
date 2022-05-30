import React from "react";
import Tour from "./Tour";
const Tours = ({ tours,removeTour }) => {
  return (
    <>
      {tours.map((tour) => {
        return  <Tour key={tours.id} {...tour} removeTour={removeTour}></Tour> 
         

      })}
    </>
);
};

export default Tours;
