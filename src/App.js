import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MemeList from "./components/MemeList.js";
import Home from "./components/Home";
import 

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/memelist" component={MemeList} />
          <Route exact path="/memeimages" component={MemeImage} />
        </Switch>
      </Router>
  );
}

export default App;
