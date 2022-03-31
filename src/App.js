import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";

import { Channels } from "./Channels";
import { Contact } from "./Contact";
import { About } from "./About";
import { SongFeed } from "./SongFeed";
import { PhotoFeed } from "./PhotoFeed";
import { WorksFeed } from "./WorksFeed";
import { HighTechFeed } from "./HighTechFeed";
function App() {
  const [currentFeed, setCurrentFeed] = useState(<About />);

  const Container = styled.div`
    @media screen and (max-width: 450px) {
      padding-left: 1em;
      padding-right: 1em;
    }
  `;

  const CurrentFeed = () => {
    const CurrentFeedThingy = currentFeed;

    return CurrentFeedThingy;
  };

  return (
    <Container>
      <Channels changeFeed={(currentFeed) => setCurrentFeed(currentFeed)} />
      <CurrentFeed />
    </Container>
  );
}

export default App;
