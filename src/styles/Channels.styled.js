import styled from "styled-components";

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  gap: 3em;
  width: 100%;
  padding-top: 1em;
  padding-bottom: 1.2em;
  justify-content: center;
  background-color: white;
  z-index: -5;
  @media all and (max-width: 500px) {
    gap: 1em;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 2em;
  }
`;
const ListItem = styled.li`
  font-size: 4vw;
  color: green;
  list-style: none;
`;
const Button = styled.button`
  padding: 1.2em;
  border-color: lime;
  border-radius: 20em;
  /* transition: all 0.8s cubic-bezier(0.1, 0.7, 1, 0.1); */

  background-color: white;

  @media all and (max-width: 500px) {
  }
  & :hover {
    filter: blur(0.02em);
    color: yellowgreen;
    border-color: whitesmoke;
  }
`;
const ButtonPressed = styled.button`
  padding: 1.2em;
  border-color: lime;
  border-radius: 20em;
  filter: drop-shadow(1vh 1vh 0.1vh grey);
  background-color: white;

  @media all and (max-width: 500px) {
    /* padding: 0.5em;
  font-size: 1.5em;
  gap: 0; */
  }
  & :hover {
    filter: blur(0.02em);
    color: yellowgreen;
    border-color: whitesmoke;
  }
`;

export { UnorderedList, Button, ListItem };
