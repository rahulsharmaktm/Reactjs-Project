import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTour] = useState([]);


  const removeTour =(id)=>{
    const newTours = tours.filter((tour)=>tour.id !==id);
    setTour(newTours);


  };

  const getTour = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTour(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }


  };

  useEffect(() => {
    getTour();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if(tours.length===0){
    return(
    <>
      <h1>No tours left</h1>
      <button onClick={getTour}>Refresh</button>
    </>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
