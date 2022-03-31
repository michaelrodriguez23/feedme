import React from "react";
import styled from "styled-components";
import { Contact } from "./Contact";
import { About } from "./About";
import { SongFeed } from "./SongFeed";
import { PhotoFeed } from "./PhotoFeed";
import { WorksFeed } from "./WorksFeed";
import { HighTechFeed } from "./HighTechFeed";

export function Channels(props) {
  const UnorderedList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    gap: 3em;
    width: 100vw;
    background-color: white;
    width: 90%;
    padding-bottom: 3em;
  `;
  const ListItem = styled.li`
    font-size: 3vw;
    color: black;
    list-style: none;
  `;
  const Button = styled.button`
    color: violet;
    padding: 1em;
    border-color: aliceblue;
    border-radius: 20em;
    filter: drop-shadow(1vw 1vw 1vw #4444dd);
    & :hover {
      filter: blur(0.02em);
      color: blue;
      border-color: whitesmoke;
    }
  `;

  function List(props) {
    return <ListItem className="li-chan">{props.channel}</ListItem>;
  }

  const data = [
    { id: 1, channel: "works" },
    { id: 2, channel: "pics" },
    { id: 3, channel: "listenings" },
    { id: 4, channel: " reads" },
    { id: 5, channel: "about" },
    { id: 6, channel: "contact" },
  ];

  const feeds = {
    works: <WorksFeed />,
    pics: <PhotoFeed />,
    listenings: <SongFeed />,
    reads: <HighTechFeed />,
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
              <Button onClick={handleClick}>
                <List channel={channel}></List>
              </Button>
            </div>
          );
        })}
      </UnorderedList>
    </>
  );
}
