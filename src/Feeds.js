import React from "react";
import RadioButtons from "./RadioButtons";
import { HighTechFeed } from "./HighTechFeed";
import { WorksFeed } from "./WorksFeed";
import { PhotoFeed } from "./PhotoFeed";
import { Contact } from "./Contact";
import { About } from "./About";

function Feeds() {
  const [active, setActive] = React.useState(0);

  return (
    <div>
      <RadioButtons changeRadioState={(active) => setActive(active)} />

      {active === 0 ? <WorksFeed /> : null}
      {active === 1 ? <HighTechFeed /> : null}
      {active === 2 ? <PhotoFeed /> : null}
      {active === 3 ? <Contact /> : null}
      {active === 4 ? <About /> : null}
    </div>
  );
}
export { Feeds };
