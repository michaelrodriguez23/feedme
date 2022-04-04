import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Arena = require("are.na");

const Photo = styled.img`
  width: 30vw;
  height: 30vw;
  object-fit: contain;
  display: block;
  margin: auto;
  border: 0.2em solid lightcoral;
  background-color: black;
  @media all and (max-width: 500px) {
    width: 40vw;
    height: 40vw;
    border: 0.2em solid white;
  }
`;

const Caption = styled.p`
  font-size: 1.5;

  color: lightsteelblue;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  margin: auto;
  text-align: center;
  text-decoration: none;
  padding: 1em;
  @media all and (max-width: 500px) {
    font-size: 1em;
  }
`;

const DivContainer = styled.div`
  padding-top: 5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const ListWrapper = styled.div`
  width: 100vw;
`;
const Header = styled.div`
  color: lightsteelblue;
  font-size: 2em;
  font-family: monospace;
  position: fixed;
  width: 20vw;
  padding-left: 2em;
`;
const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 700px;
  overflow-y: auto;
  max-height: 1000px;
  background-color: white;
`;

function MapFeed(props) {
  return (
    <Wrapper>
      <Header>
        <p> The Weekly Digest [Random things I read on the web] </p>
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
                  <a href={feed.source ? feed.source.url : null}>
                    <Photo src={feed.image ? feed.image.display.url : null} />
                    <Caption> {feed.title} </Caption>{" "}
                  </a>
                </List>
              </ListWrapper>
            ))}
        </DivContainer>
      </ul>
    </Wrapper>
  );
}
const List = styled.li`
  text-decoration: none;
  display: block;

  padding: 2em;
`;

export function HighTechFeed() {
  let token = process.env.REACT_APP_ARENA;

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
