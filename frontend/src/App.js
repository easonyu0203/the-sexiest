import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Play from "./pages/Play";
import Tutorial from "./pages/Tutorial";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/play" component={Play} />
          <Route path="/tutorial" component={Tutorial} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
