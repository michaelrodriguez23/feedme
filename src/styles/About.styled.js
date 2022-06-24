import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 99vh;
`;
const Me = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0%;
  height: 50%;
  transition: ease-out 0.4s;
  @media all and (max-width: 500px) {
    height: 40%;
    filter: opacity(0%);
  }
  @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
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
    width: 20em;
    font-size: 0.8em;
    bottom: 20%;
    left: 2%;
  }
`;

const Cursor = styled.span``;

const Bio = styled.div`
  margin-top: 0em;
  padding: 1.5em;
  position: relative;
  font-size: 5.5vw;
  z-index: 2;
  @media all and (max-width: 500px) {
    margin-top: 3em;
    font-size: 5vw;
    width: 15em;
  }
`;

export { Bio, Container, NetworkContainer, Me, Cursor };
