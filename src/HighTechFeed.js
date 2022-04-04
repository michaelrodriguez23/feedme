import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

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
  font-size: 4vh;
  font-family: monospace;
  position: fixed;
  width: 20vh;
  padding-left: 1em;
  @media all and (max-width: 500px) {
    font-size: 2vh;
    width: 5vh;
  }
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
        <p> The Weekly Link Digest</p>
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
                  <a
                    href={feed.source ? feed.source.url : null}
                    target="_blank"
                    rel="noopener"
                  >
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

const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-color: limegreen;
  transition: all;
`;

const List = styled.li`
  text-decoration: none;
  display: block;

  padding: 2em;
`;

export function HighTechFeed() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("red");

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

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <PulseLoader
        color={color}
        className={loading ? "fade-in" : "fade-out"}
        loading={loading}
        css={override}
        size={100}
      />

      {!loading ? <MapFeed feed={feed}> </MapFeed> : null}
    </div>
  );
}
