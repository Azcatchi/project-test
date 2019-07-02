import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Music from "./components/music";
import Prime from "./components/prime";
import Graph from "./components/graph";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/music" component={Music} />
          <Route path="/prime" component={Prime} />
          <Route path="/graph" component={Graph} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
