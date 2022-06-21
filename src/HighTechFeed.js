import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { format } from "date-fns";
import { gsap } from "gsap";
import {
  Wrapper,
  Header,
  DivContainer,
  ListWrapper,
  DetailWrapper,
  List,
  Photo,
  Caption,
  Dates,
  Container,
} from "./styles/Feed.styled";

const Arena = require("are.na");

function formatDates(feed) {
  let d = new Date(feed.created_at);
  return (d = format(d, "PPPP"));
}

function MapFeed(props) {
  return (
    <Wrapper>
      <ul>
        <Header>
          <p> The Weekly Link Digest</p>
        </Header>
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
                    </a>
                  </List>
                  <DetailWrapper>
                    <Caption> {feed.title} </Caption>
                    <Dates>{d.toString()}</Dates>{" "}
                  </DetailWrapper>
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
  left: 33%;
  top: 20%;
  @media screen and (max-width: 450px) {
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
    gsap.set(".HighTechContainer", { opacity: 0 });
    gsap.to(".HighTechContainer", {
      id: "fadeSlideFrom",
      delay: 0.3,
      y: 0,
      x: 0,
      duration: 1,
      scale: 1,
      opacity: 1.2,
    });
  }, []);

  return (
    <>
      <Container className="HighTechContainer">
        <MapFeed feed={feed}></MapFeed>
      </Container>
    </>
  );
}
