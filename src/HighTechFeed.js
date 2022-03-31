import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Arena = require("are.na");

const Photo = styled.img`
  width: 25vw;
  object-fit: scale-down;
  display: block;
  margin: auto;
`;

const Caption = styled.p`
  font-size: 0.8em;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  margin: auto;
  text-align: center;
  text-decoration: none;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  justify-content: space-around;
`;
const ListWrapper = styled.div`
  width: 100vw;
  flex: 1;
`;
const Header = styled.div`
  padding: 1em;
`;

function MapFeed(props) {
  return (
    <>
      <Header>
        <h1> The Weekly Digest</h1>
        <h3>
          Thought to share some of the articles + resources I find while surfing
          the web.
        </h3>
      </Header>

      <ul>
        <DivContainer>
          {props.feed
            .slice(0)
            .reverse()
            .filter((feed) => feed.image)
            .map((feed, index) => (
              <ListWrapper>
                <List key={feed.id}>
                  <a href={feed.source ? feed.source.provider.url : null}>
                    <h4> {index + 1}</h4>
                    <Photo src={feed.image ? feed.image.display.url : null} />
                    <Caption> {feed.title} </Caption>{" "}
                  </a>
                </List>
              </ListWrapper>
            ))}
        </DivContainer>
      </ul>
    </>
  );
}
const List = styled.li`
  text-decoration: none;
  display: block;

  padding: 2em;
`;

export function HighTechFeed() {
  let token = process.env.REACT_APP_ARENA_KEY;

  const arena = new Arena({
    accessToken: token,
  });

  let [feed, setFeed] = useState([]);

  useEffect(() => {
    arena
      .channel("weeklydigest")
      .contents({ per: 200 })
      .then((contents) => setFeed(contents))
      .catch((err) => console.log(err));
  }, []);

  return <div>{<MapFeed feed={feed}> </MapFeed>}</div>;
}
