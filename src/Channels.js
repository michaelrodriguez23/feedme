import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Contact } from "./Contact";
import { About } from "./About";
import { SongFeed } from "./SongFeed";
import { PhotoFeed } from "./PhotoFeed";
import { WorksFeed } from "./WorksFeed";
import { HighTechFeed } from "./HighTechFeed";
import { gsap } from "gsap";

import { Link } from "react-router-dom";

export function Channels(props) {
  let navBtn = useRef(null);

  useEffect(() => {
    console.log(navBtn);
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

  const UnorderedList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    gap: 3em;
    width: 100%;
    padding-top: 1em;
    padding-bottom: 2em;
    justify-content: center;
    background-color: white;
    z-index: -5;
    @media all and (max-width: 500px) {
      gap: 1em;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 2em;
    }
  `;
  const ListItem = styled.li`
    font-size: 4vw;
    color: black;
    list-style: none;
  `;
  const Button = styled.button`
    padding: 1.2em;
    border-color: lightcoral;
    border-radius: 20em;
    filter: drop-shadow(1vh 1vh 1vh limegreen);
    background-color: white;

    @media all and (max-width: 500px) {
      /* padding: 0.5em;
      font-size: 1.5em;
      gap: 0; */
    }
    & :hover {
      filter: blur(0.02em);
      color: yellowgreen;
      border-color: whitesmoke;
    }
  `;

  function List(props) {
    return <ListItem className="li-chan">{props.channel}</ListItem>;
  }

  const data = [
    { id: 1, channel: "works" },
    // { id: 2, channel: "pics" },
    // { id: 3, channel: "listenings" },
    { id: 4, channel: "mood" },
    { id: 5, channel: "about" },
    { id: 6, channel: "contact" },
  ];

  const feeds = {
    works: <WorksFeed />,
    // pics: <PhotoFeed />,
    // listenings: <SongFeed />,
    mood: <HighTechFeed />,
    about: <About />,
    contact: <Contact />,
  };

  const handleClick = (e) => props.changeFeed(feeds[e.target.innerText]);

  return (
    <>
      <UnorderedList>
        {data.map(({ id, channel }, index) => {
          return (
            <div>
              <Link to={"/" + channel}>
                <Button ref={(el) => (navBtn = el)} className="nav-btn">
                  <List channel={channel}></List>
                </Button>
              </Link>
            </div>
          );
        })}
      </UnorderedList>
    </>
  );
}
