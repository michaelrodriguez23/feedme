import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./data.js";
const Arena = require("are.na");

const Container = styled.div`
  margin: auto;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 50;
`;

const Title = styled.p`
  font-size: 2em;
  font-family: Arial;
  display: block;
  margin: auto;
  text-align: center;
  @media screen and (max-width: 450px) {
    padding-top: 1em;
    font-size: 1.2em;
    font-weight: 700;
    width: 90vw;
  }
`;
const Caption = styled.p`
  font-size: 1em;
  width: 50vw;
  font-family: monospace;
  display: block;
  margin: auto;
  text-align: center;

  @media screen and (max-width: 450px) {
    font-size: 1.5vh;
    width: 80vw;
  }
`;
const CoverImage = styled.img`
  object-fit: contain;
  width: 50vw;

  flex-grow: auto;
  @media screen and (max-width: 450px) {
    width: 50vw;
  }
`;
const SubImage1 = styled.img`
  object-fit: contain;
  width: 30vw;
  flex-grow: auto;
`;
const SubImage2 = styled.img`
  object-fit: contain;
  width: 30vw;
  flex-grow: auto;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding-top: 1em;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-top: 1em;
`;
const List = styled.li`
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding-top: 10vh;

  @media screen and (max-width: 450px) {
    height: 90vw;
  }
`;
const HyperLink = styled.button`
  background: none;
  border: none;
  height: 2.6em;
  width: 2.6em;
  font-weight: bold;
  &:hover {
    cursor: pointer;

    transform: scale(1.2);
  }
`;
const BlogLink = styled.button`
  background-repeat: no-repeat;
  background: none;
  font-weight: bold;
  border: none;
  height: 2.6em;
  width: 2.6em;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const GithubLink = styled.button``;

function MapWork(props) {
  let [work, setWork] = useState([data]);
  return (
    <Container>
      <ul>
        {props.data.map((work, index) => (
          <List
            key={work.id}
            style={{ backgroundColor: index % 2 == 1 ? "black" : "white" }}
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
              style={{ color: index % 2 == 1 ? "white" : "black" }}
            >
              <Title> {work.title} </Title>
              <Caption> {work.description} </Caption>
            </HeaderContainer>
            <LinkContainer>
              <HyperLink style={{ color: index % 2 == 1 ? "white" : "black" }}>
                Demo{" "}
              </HyperLink>
              <BlogLink style={{ color: index % 2 == 1 ? "white" : "black" }}>
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
