import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Networks = (props) => {
  let [linkData, setLinkData] = useState([props.links]);

  const Container = styled.div`
    font-family: monospace;
    text-align: center;
    margin: auto;
    border: 2px solid black;
    border-radius: 1em;
    padding: 1em;
    width: 20%;
    filter: opacity(90%);

    background-color: coral;
    @media screen and (max-width: 450px) {
    }
  `;

  const List = styled.li`
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    text-align: center;

    @media screen and (max-width: 450px) {
      height: 90vh;
    }
  `;

  const Header = styled.li`
    font-size: 2em;
    font-style: bold;
    padding-bottom: 0.2em;

    @media screen and (max-width: 450px) {
    }
  `;

  return (
    <Container>
      <ul>
        <Header>[other channels]</Header>
        {props.links.map((link, index) => (
          <List key={link.id}>
            {" "}
            <a href={link.src}>‣ {link.name} </a>{" "}
          </List>
        ))}
      </ul>
    </Container>
  );
};

export default Networks;
