import styled from "styled-components";

const Container = styled.div`
  font-family: monospace;
  text-align: center;
  margin: auto;
  border: 2px solid black;
  border-radius: 1em;
  padding: 1em;
  width: 100%;
  z-index: -10;
  filter: opacity(90%);

  background-color: coral;
  @media screen and (max-width: 450px) {
  }
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  text-align: left;

  @media screen and (max-width: 450px) {
    font-size: 0.9;
  }
`;

const Header = styled.li`
  font-size: 2em;
  font-style: bold;
  padding-bottom: 0.2em;

  @media screen and (max-width: 450px) {
    font-size: 1em;
  }
`;

export { Container, Header, List };
