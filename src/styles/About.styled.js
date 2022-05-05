import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
`;
const Me = styled.img`
  position: absolute;
  bottom: 0%;
  right: 1%;
  height: 50%;
  transition: ease-out 0.4s;

  &:hover {
    filter: opacity(10%);
  }
`;
const NetworkContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  @media all and (max-width: 500px) {
    bottom: 15%;
    left: 2%;
  }
`;

const Box = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  background: coral;
  height: 0.5vw;
  z-index: -2;
`;
const Hi = styled.span`
  display: inline-block;
`;
const Text = styled.span`
  z-index: -1;
  display: inline-block;
`;
const Cursor = styled.span``;

const Bio = styled.div`
  margin: auto;
  position: relative;
  font-size: 6vw;
  overflow: hidden;
  padding-bottom: 35vh;
  z-index: 2;
`;

export { Bio, Container, NetworkContainer, Me, Cursor, Text, Hi, Box };
