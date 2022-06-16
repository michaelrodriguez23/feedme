import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { EmailButton } from "./EmailButton";
import { Contact } from "./Contact";
import { Slider } from "./Slider";
import { WorksFeed } from "./WorksFeed";

import { Feeds } from "./Feeds";
import { Channels } from "./Channels";
import React, { useState } from "react";

export function App() {
  const [active, setActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);

  return (
    <div>
      <Router>
        <Slider
          active={active}
          changeSliderState={(active) => setActive(active)}
        />

        {active ? <Feeds /> : null}

        {/* <Route path="/Contact" component={Contact} /> */}

        {/* <Route path="/Works" component={WorksFeed} /> */}
      </Router>
    </div>
  );
}

export default App;
