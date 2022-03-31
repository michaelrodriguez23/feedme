import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
const Arena = require("are.na");

const Container = styled.div`
  width: 40%;
  object-fit: fill;
  display: block;
  margin: auto;
`;

const Caption = styled.p`
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  margin: auto;
  text-align: center;
`;

function MapFeed(props) {
  return (
    <ul>
      {props.feed
        .slice(0)
        .reverse()
        .filter((feed) => feed.image)
        .map((feed, index) => (
          <List key={feed.id}>
            <h1> {index + 1}</h1>
            <Iframe
              url={feed.source ? feed.source.url : null}
              width="450px"
              height="450px"
              className="myYoutube"
              display="initial"
              position="relative"
            />
            <Caption> {feed.title} </Caption>
          </List>
        ))}
    </ul>
  );
}
const List = styled.li`
  text-decoration: none;
  display: block;
  padding: 2em;
`;

export function WorksFeed() {
  let token = process.env.REACT_APP_ARENA_KEY;
  const arena = new Arena({
    accessToken: token,
  });

  let [feed, setFeed] = useState([]);

  useEffect(() => {
    arena
      .channel("worksinprogress")
      .contents({ per: 200 })
      .then((contents) => console.log(contents))
      .catch((err) => console.log(err));
  }, []);

  return <div>{<MapFeed feed={feed}> </MapFeed>}</div>;
}
