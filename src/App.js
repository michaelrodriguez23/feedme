import "./App.css";
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Contact } from "./Contact";
import { About } from "./About";
import { SongFeed } from "./SongFeed";
import { PhotoFeed } from "./PhotoFeed";
import { WorksFeed } from "./WorksFeed";
import { HighTechFeed } from "./HighTechFeed";
import { Channels } from "./Channels";
import { gsap } from "gsap";

function App() {
  // const [currentFeed, setCurrentFeed] = useState(<About />);

  const Container = styled.div``;

  // const CurrentFeed = () => {
  //   const CurrentFeedThingy = currentFeed;

  //   return CurrentFeedThingy;
  // };

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
