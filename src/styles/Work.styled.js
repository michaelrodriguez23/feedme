import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: -5;

  @media screen and (max-width: 450px) {
  }
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
    width: 80vw;
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
    width: 60vw;
    height: 20vw;
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
  width: 40vw;
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
  height: 100vh;
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
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (max-width: 450px) {
    height: 40vh;
  }
`;
const HyperLink = styled.button`
  background: none;
  border: none;
  height: 2.6em;
  width: 3.6em;
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
  width: 3.6em;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
export {
  BlogLink,
  HyperLink,
  List,
  HeaderContainer,
  ImageContainer,
  LinkContainer,
  SubImage1,
  SubImage2,
  CoverImage,
  Caption,
  Title,
  Container,
};
