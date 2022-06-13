import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { format } from "date-fns";
import PulseLoader from "react-spinners/PulseLoader";
import {
  Wrapper,
  Header,
  DivContainer,
  ListWrapper,
  List,
  Photo,
  Caption,
  Dates,
  Container,
  PulseLoaderContainer,
} from "./styles/Feed.styled";

const Arena = require("are.na");

function formatDates(feed) {
  let d = new Date(feed.created_at);
  return (d = format(d, "PPPP"));
}

function MapFeed(props) {
  return (
    <Wrapper>
      <h1> hey</h1>
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
                      rel="noopener noreferrer"
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
  @media screen and (max-width: 450px) {
    /* left: 30vw; */
  }
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
    <>
      <Container>
        {/* <PulseLoaderContainer>
          <PulseLoader
            color={color}
            className={loading ? "fade-in" : "fade-out"}
            loading={loading}
            css={override}
            size={60}
          />
        </PulseLoaderContainer> */}

        {!loading ? (
          <MapFeed feed={feed}>
            <p> hey</p>
          </MapFeed>
        ) : null}
      </Container>
    </>
  );
}
