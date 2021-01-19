import React, { useState } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Play from "./pages/Play";
import Tutorial from "./pages/Tutorial";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  const [round, setRound] = useState(1);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/play" component={Play} />
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
