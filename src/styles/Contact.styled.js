import styled from "styled-components";

const Info = styled.p`
  display: block;
  font-size: 4vh;
  color: lightcoral;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
`;

const ContactContainer = styled.div``;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;
const PulseLoaderContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 20em;
`;

const Form = styled.form`
  padding-top: 10em;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  margin: auto;
`;

const Input = styled.input`
  height: 5vh;
  width: 40vw;
  font-size: 2vw;
  border-radius: 0.2em;
  text-align: center;
  margin: 0.5em;
  @media screen and (max-width: 450px) {
    font-size: 6vw;
    width: 60vw;
  }
`;
const Send = styled.input`
  margin: 0.5em;
`;
const Text = styled.textarea`
  height: 20vh;
  width: 40vw;
  font-size: 2vw;
  border-radius: 0.2em;
  text-align: center;

  @media screen and (max-width: 450px) {
    font-size: 4vw;
    width: 60vw;
  }
`;
const Header = styled.h1`
  font-size: 20.2vh;
  filter: drop-shadow(1vh 1vh 0.7vh lightblue);
  font-family: Arial, Helvetica, sans-serif;
`;

export {
  Send,
  Input,
  Text,
  Header,
  Form,
  PulseLoaderContainer,
  Container,
  ContactContainer,
  Info,
};
