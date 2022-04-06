import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "styled-components";
import dateFormat, { masks } from "dateformat";
import { format } from "date-fns";
import PulseLoader from "react-spinners/PulseLoader";

const Arena = require("are.na");

const Photo = styled.img`
  width: 20vw;
  object-fit: fill;
  display: block;
  margin: auto;

  filter: drop-shadow(0vh 0vh 2vh lightsteelblue);

  @media all and (max-width: 500px) {
    width: 40vw;
    height: 40vw;
    border: 0.2em solid white;
    transition: all ease 0.2s;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

const Caption = styled.p`
  font-size: 0.9em;
  width: 15em;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  margin: auto;
  text-align: center;
  text-decoration: none;
  padding-top: 1em;
  @media all and (max-width: 500px) {
    font-size: 1em;
  }
`;
const Dates = styled.p`
  font-size: 0.8em;
  width: 20em;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  margin: auto;
  text-align: center;
  text-decoration: none;
  padding-top: 1em;
  @media all and (max-width: 500px) {
    font-size: 1em;
  }
`;

const DivContainer = styled.div`
  padding-top: 2em;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  max-height: 10000px;
  padding-left: 10em;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: scroll;
  overflow-y: scroll;
  @media all and (max-width: 500px) {
    padding-left: 0em;
  }
`;
const ListWrapper = styled.div`
  width: 100vw;
`;
const Header = styled.div`
  color: lightsteelblue;
  font-size: 4vh;
  font-family: monospace;
  height: 10vh;
  position: fixed;
  width: 50vh;
  padding-left: 1em;
  @media all and (max-width: 500px) {
    font-size: 2vh;
    width: 5vh;
  }
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 10000px;
  background-color: white;
`;

function formatDates(feed) {
  let d = new Date(feed.created_at);
  return (d = format(d, "PPPP"));
}

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
            .map((feed, index) => {
              let d = formatDates(feed);

              return (
                <ListWrapper>
                  <List key={feed.id}>
                    <a
                      href={feed.source ? feed.source.url : null}
                      target="_blank"
                      rel="noopener"
                    >
                      <Photo src={feed.image ? feed.image.display.url : null} />
                      <Caption> {feed.title} </Caption>
                      <Dates>{d.toString()}</Dates>{" "}
                    </a>
                  </List>
                </ListWrapper>
              );
            })}
        </DivContainer>
      </ul>
    </Wrapper>
  );
}

const override = css`
  position: absolute;
  top: 50%;
  left: 45vw;
  @media screen and (max-width: 450px) {
    left: 30vw;
  }
`;

const List = styled.li`
  text-decoration: none;
  display: block;
  padding: 2em;
`;

export function HighTechFeed() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("whitesmoke");

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
        size={50}
      />

      {!loading ? <MapFeed feed={feed}> </MapFeed> : null}
    </div>
  );
}
