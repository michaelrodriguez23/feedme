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
    width: 12em;
    bottom: 15%;
    left: 2%;
  }
`;

const Cursor = styled.span``;

const Bio = styled.div`
  margin: auto;
  position: relative;
  font-size: 6vw;
  overflow: hidden;
  z-index: 2;
`;

export { Bio, Container, NetworkContainer, Me, Cursor };
