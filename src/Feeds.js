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
      {active === 0 ? <About /> : null}
      {active === 1 ? <WorksFeed /> : null}
      {active === 2 ? <HighTechFeed /> : null}
      {active === 3 ? <PhotoFeed /> : null}
      {active === 4 ? <Contact /> : null}
    </div>
  );
}
export { Feeds };
