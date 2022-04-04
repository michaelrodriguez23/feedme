import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { Home } from "./Pages/Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { SongFeed } from "./SongFeed";
import { PhotoFeed } from "./PhotoFeed";
import { WorksFeed } from "./WorksFeed";
import { HighTechFeed } from "./HighTechFeed";
import { Channels } from "./Channels";
function App() {
  // const [currentFeed, setCurrentFeed] = useState(<About />);

  const Container = styled.div`
    @media screen and (max-width: 450px) {
      padding-left: 1em;
      padding-right: 1em;
    }
  `;

  // const CurrentFeed = () => {
  //   const CurrentFeedThingy = currentFeed;

  //   return CurrentFeedThingy;
  // };
  console.log("yer");

  return (
    <Router>
      <Channels />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Mood" component={HighTechFeed} />
      <Route path="/Works" component={WorksFeed} />
    </Router>
  );
}

export default App;
