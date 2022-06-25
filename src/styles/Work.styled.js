import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: -5;

  @media screen and (max-width: 450px) {
  }
`;

const Title = styled.p`
  font-size: 1.1em;
  font-family: monospace;
  font-weight: 900;
  display: block;
  margin: auto;
  text-align: center;
  width: 30vw;

  @media screen and (max-width: 450px) {
    font-size: 0.9em;
    font-weight: 700;
    width: 30vw;
  }
`;
const Caption = styled.p`
  font-size: 0.9em;
  height: 1em;
  word-wrap: break-word;
  white-space: 1em;
  width: 30vw;
  font-family: monospace;
  margin: auto;
  text-align: center;
  @media screen and (max-width: 450px) {
    font-size: 1.2vh;
    width: 50vw;
    text-align: center;
  }
`;
const CoverImage = styled.img`
  object-fit: contain;
  height: 23vw;
  width: 23vw;
  padding: 1em;
  border: 0.1em double silver;
  border-radius: 1em;

  @media screen and (max-width: 450px) {
    height: 40vw;
    width: 40vw;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1em;
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: base;
  gap: 0.2em;
  margin-top: 2em;
`;
const List = styled.li`
  display: flex;
  flex-direction: row;
  height: 40vh;
  padding: 2em;
  margin-bottom: 2em;
  @media screen and (max-width: 750px) {
    flex-direction: column;
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
  CoverImage,
  Caption,
  Title,
  Container,
};
