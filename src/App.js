import "./App.css";
import React, { useState } from "react";

import { Channels } from "./Channels";
import { Contact } from "./Contact";
import { About } from "./About";
import { SongFeed } from "./SongFeed";
import { PhotoFeed } from "./PhotoFeed";
import { WorksFeed } from "./WorksFeed";
import { HighTechFeed } from "./HighTechFeed";
function App() {
  const [currentFeed, setCurrentFeed] = useState(<About />);

  const CurrentFeed = () => {
    const CurrentFeedThingy = currentFeed;

    return CurrentFeedThingy;
  };

  return (
    <>
      <Channels changeFeed={(currentFeed) => setCurrentFeed(currentFeed)} />
      <CurrentFeed />
    </>
  );
}

export default App;
