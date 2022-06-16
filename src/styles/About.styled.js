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
  @media all and (max-width: 500px) {
    height: 30%;
  }
  &:hover {
    filter: opacity(20%);
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

const ChannelsBox = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  background: coral;
  height: 0.5vw;
  z-index: -2;
`;
const FeedsBox = styled.span`
  position: absolute;
  left: 5em;
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
const FeedContainer = styled.div`
  font-family: monospace;
  text-align: center;
  margin: auto;
  border: 2px solid black;
  border-radius: 1em;
  padding: 1em;
  width: 100%;
  z-index: -10;
  filter: opacity(90%);
`;

export {
  Bio,
  Container,
  NetworkContainer,
  FeedContainer,
  Me,
  Cursor,
  Text,
  Hi,
  ChannelsBox,
  FeedsBox,
};
