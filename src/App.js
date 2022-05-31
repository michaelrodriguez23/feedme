import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { EmailButton } from "./EmailButton";
import { Contact } from "./Contact";
import { About } from "./About";
import { Slider } from "./Slider";
import { WorksFeed } from "./WorksFeed";

import { Feeds } from "./Feeds";
import { Channels } from "./Channels";
import React, { useState } from "react";

export function App() {
  const [active, setActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);

  console.log(emailActive);
  return (
    <div>
      <Router>
        {/* <Channels /> */}
        <Slider changeSliderState={(active) => setActive(active)} />
        {!active ? (
          <EmailButton
            changeEmailState={(emailActive) => setEmailActive(emailActive)}
          />
        ) : null}
        {active ? <Route path="/Feed" component={Feeds} /> : <About />}

        {/* <Route path="/Contact" component={Contact} /> */}

        {/* <Route path="/Works" component={WorksFeed} /> */}
      </Router>
    </div>
  );
}

export default App;
