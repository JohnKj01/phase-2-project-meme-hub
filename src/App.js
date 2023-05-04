import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import MemeList from "./components/MemeList";
import MemeImage from "./components/MemeImage";


function App() {
  const [memes, setMemes] = useState([]);
  useEffect  (() => {
    fetch("https://meme-api.com/gimme/50")
      .then((response) => response.json())
      .then((data)=> data.memes)
      .then(memes => setMemes(memes))
  }, []);

  return(
    <div>
      <NavBar/>
      <Home Introduction={Home}/>
      <MemeList MemeList={MemeList}/>
      <MemeImage MemeImage={MemeImage}/>
    </div>
  );
}
export default  App
