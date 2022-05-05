import React from "react";
import { Container, Header, List } from "./styles/Network.styled.js";

const Networks = (props) => {
  return (
    <Container>
      <ul>
        <Header>[channels]</Header>
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
