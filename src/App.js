import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { EmailButton } from "./EmailButton";
import { Contact } from "./Contact";
import { Slider } from "./Slider";
import { WorksFeed } from "./WorksFeed";

import { Feeds } from "./Feeds";
import { Channels } from "./Channels";
import React, { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

export function App() {
  const [active, setActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [height, width] = useWindowSize();

  useEffect(() => {
    if (width > 600) {
      setActive(true);
    }
  });

  return (
    <div>
      <Router>
        {!active ? (
          <Slider
            active={active}
            changeSliderState={(active) => setActive(active)}
          />
        ) : null}

        {active ? <Feeds /> : null}

        {/* <Route path="/Contact" component={Contact} /> */}

        {/* <Route path="/Works" component={WorksFeed} /> */}
      </Router>
    </div>
  );
}

export default App;
