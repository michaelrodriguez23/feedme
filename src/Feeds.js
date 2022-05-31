import React from "react";
import RadioButtons from "./RadioButtons";
import { HighTechFeed } from "./HighTechFeed";
import { WorksFeed } from "./WorksFeed";
import { PhotoFeed } from "./PhotoFeed";

function Feeds() {
  const [active, setActive] = React.useState(0);

  console.log(active);
  return (
    <div>
      <RadioButtons changeRadioState={(active) => setActive(active)} />

      {active === 0 ? <WorksFeed /> : null}
      {active === 1 ? <HighTechFeed /> : null}
      {active === 2 ? <PhotoFeed /> : null}
    </div>
  );
}
export { Feeds };
