import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  const [peopleInSpace, setPeopleInSpace] = useState([]);

  useEffect(() => {
    fetch("https://meme-api.com/gimme/50")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.memes);
      });
  }, []);

  return(
    <div>
      <NavBar/>
      <Home Introduction={Home}/>
    </div>
  );
}
export default  App