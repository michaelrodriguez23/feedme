import React, { useState, useEffect, useRef } from "react";
import { Contact } from "./Contact";
import { About } from "./About";
import { ListItem, UnorderedList, Button } from "./styles/Channels.styled";
import { WorksFeed } from "./WorksFeed";
import { HighTechFeed } from "./HighTechFeed";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export function Channels(props) {
  let [pressed, setPressed] = useState(false);
  let navBtn = useRef(null);

  const data = [
    { id: 1, channel: "works" },
    { id: 2, channel: "feed" },
    { id: 3, channel: "about" },
    { id: 4, channel: "contact" },
  ];

  useEffect(() => {
    gsap.set(".nav-btn", { x: 0, y: 350, opacity: 0 });
    gsap.to(".nav-btn", {
      stagger: 0.2,
      rotation: 360,
      y: 0,
      duration: 1,
      opacity: 0.9,
      yoyo: true,
    });
  });

  function toggleButtonState() {
    console.log("pressed");
    if (pressed) {
      setPressed(false);
    } else {
      setPressed(true);
    }
  }

  const feeds = {
    works: <WorksFeed />,
    // pics: <PhotoFeed />,
    // listenings: <SongFeed />,
    feed: <HighTechFeed />,
    about: <About />,
    contact: <Contact />,
  };

  const handleClick = (e) => props.changeFeed(feeds[e.target.innerText]);

  function List(props) {
    return <ListItem className="li-chan">{props.channel}</ListItem>;
  }
  return (
    <>
      <UnorderedList>
        {data.map(({ id, channel }, index) => {
          return (
            <div>
              <Link key={id} to={"/" + channel}>
                <Button
                  // onClick={toggleButtonState}
                  // buttonValue={
                  //   pressed ? "drop-shadow(0.5vw 0.5vw 0.1vw red);" : "none"
                  // }
                  ref={(el) => (navBtn = el)}
                  className="nav-btn"
                >
                  <List key={data.id} channel={channel}></List>
                </Button>
              </Link>
            </div>
          );
        })}
      </UnorderedList>
    </>
  );
}
