import React, { useState } from "react";
import styled from "styled-components";
import { data } from "./data.js";

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
  return (
    <Container>
      <ul>
        {props.data.map((work, index) => (
          <List
            key={work.id}
            style={{ backgroundColor: index % 2 === 1 ? "black" : "white" }}
          >
            {" "}
            <ImageContainer>
              <CoverImage src={process.env.PUBLIC_URL + work.images.cover} />
              {/* {work.images.first ? (
                <SubImage1 src={process.env.PUBLIC_URL + work.images.first} />
              ) : null}
              {work.images.first ? (
                <SubImage2 src={process.env.PUBLIC_URL + work.images.second} />
              ) : null} */}
            </ImageContainer>
            <HeaderContainer
              style={{ color: index % 2 === 1 ? "white" : "black" }}
            >
              <Title> {work.title} </Title>
              <Caption> {work.description} </Caption>
            </HeaderContainer>
            <LinkContainer>
              <HyperLink style={{ color: index % 2 === 1 ? "white" : "black" }}>
                Demo{" "}
              </HyperLink>
              <BlogLink style={{ color: index % 2 === 1 ? "white" : "black" }}>
                {" "}
                Repo
              </BlogLink>
            </LinkContainer>
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
