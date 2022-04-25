import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Contact } from "./Contact";
import { About } from "./About";

import { WorksFeed } from "./WorksFeed";
import { HighTechFeed } from "./HighTechFeed";
import { Channels } from "./Channels";

function App() {
  return (
    <Router>
      <Channels />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Feed" component={HighTechFeed} />
      <Route path="/Works" component={WorksFeed} />
    </Router>
  );
}

export default App;
