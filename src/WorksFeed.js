import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "./data.js";
import { gsap } from "gsap";

import {
  BlogLink,
  HyperLink,
  List,
  HeaderContainer,
  ImageContainer,
  LinkContainer,
  CoverImage,
  Caption,
  Title,
  Container,
} from "./styles/Work.styled";

const GithubLink = styled.button``;

function MapWork(props) {
  let [work, setWork] = useState([data]);
  useEffect(() => {
    gsap.set(".WorkContainer", { opacity: 0 });
    gsap.to(".WorkContainer", {
      id: "fadeSlideFrom",
      delay: 0.3,
      y: 0,
      x: 0,
      duration: 1,
      scale: 1,
      opacity: 1.2,
    });
  });
  return (
    <Container className="WorkContainer">
      <ul>
        {props.data.map((work, index) => (
          <List key={work.id}>
            <a
              href={work.links.project}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageContainer>
                <CoverImage src={process.env.PUBLIC_URL + work.images.cover} />
              </ImageContainer>
            </a>

            <HeaderContainer>
              <Title> {work.title} </Title>
              <Caption> {work.description} </Caption>
            </HeaderContainer>
          </List>
        ))}
      </ul>
    </Container>
  );
}

export function WorksFeed() {
  let [works, setWorks] = useState([]);

  return <div>{<MapWork data={data}> </MapWork>}</div>;
}
