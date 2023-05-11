import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import MemeList from "./components/MemeList";
import MemeImage from "./components/MemeImage";
import "./components/App.css";



function App() {
  return(
    <div>
      <NavBar/>
      <Home Introduction={Home}/>
      <MemeList MemeList={MemeList}/>
      <MemeImage MemeImage={MemeImage}/>
    </div>
  );
}
export default App;
