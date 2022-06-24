import styled from "styled-components";
const Photo = styled.img`
  width: 20vw;
  object-fit: fill;
  display: block;
  margin: auto;

  filter: drop-shadow(0vh 0vh 2vh lightsteelblue);

  @media all and (max-width: 450px) {
    width: 40vw;
    height: 40vw;
    border: 0.2em solid white;
    transition: all ease 0.2s;
  }
  &:hover {
    transform: scale(1.02);
  }
`;
const List = styled.li`
  text-decoration: none;
  display: block;
`;
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Caption = styled.p`
  font-size: 1em;
  width: 20em;
  color: black;
  font-family: Helvetica;
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
  @media all and (max-width: 450px) {
    font-size: 1em;
  }
`;

const DivContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  align-content: right;
  max-height: 10000px;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: scroll;
  overflow-y: scroll;
  z-index: 10;
  margin-top: 0;
  gap: 3em;
  @media all and (max-width: 500px) {
  }
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding: 1em;
  gap: 10em;
  justify-content: right;
  margin-right: 15em;
  @media all and (max-width: 500px) {
    flex-direction: column;
    margin-right: 0;
    padding: 1em;
    width: 100vw;
    gap: 2em;
  }
`;

const Container = styled.div`
  z-index: 10;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  margin-top: 0;
`;
const Header = styled.div`
  color: lightsteelblue;
  font-size: 4vh;
  font-family: monospace;
  height: 10vh;
  position: fixed;
  width: 50vh;
  padding-left: 1em;
  padding-top: 0.5em;
  @media all and (max-width: 500px) {
    font-size: 1.2vh;
    width: 10vw;
    z-index: 10;
    padding-top: 1em;
  }
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 10000px;
  background-color: white;
  z-index: 4;
`;

export {
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
};
