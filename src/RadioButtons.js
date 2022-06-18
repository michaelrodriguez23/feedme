import React, { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import "./styles/RadioButtons.css";

const Wrapper = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  background: none;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.3em;
  z-index: 10;
  margin-bottom: 3.5em;
`;
const ButtonWrapper = styled.div`
  margin: auto;
  flex-direction: column;
  font-size: 2em;
  height: 2em;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 450px) {
  }
`;

export default function RadioButtons(props) {
  useEffect(() => {
    gsap.set(".wrapper", { opacity: 0 });
    gsap.to(".wrapper", {
      delay: 1,
      y: 0,
      x: 0,
      duration: 1,
      scale: 1,
      opacity: 1.2,
    });
  }, []);

  return (
    <Wrapper className="wrapper">
      <ButtonWrapper>
        <form>
          <input
            type="radio"
            id="radio5"
            value="about"
            name="feedOption"
            defaultChecked
            onClick={(active) => props.changeRadioState(0)}
          />
          <label for="radio5"> about </label>

          <input
            type="radio"
            value="Works"
            id="radio1"
            name="feedOption"
            onClick={(active) => props.changeRadioState(1)}
          />
          <label for="radio1"> works </label>

          <input
            type="radio"
            id="radio2"
            value="Reads"
            name="feedOption"
            onClick={(active) => props.changeRadioState(2)}
          />
          <label for="radio2"> reads </label>
          <input
            type="radio"
            id="radio3"
            value="Photos"
            name="feedOption"
            onClick={(active) => props.changeRadioState(3)}
          />
          <label for="radio3"> photos </label>
          <input
            type="radio"
            id="radio4"
            value="email"
            name="feedOption"
            onClick={(active) => props.changeRadioState(4)}
          />
          <label for="radio4"> contact </label>
        </form>
      </ButtonWrapper>
    </Wrapper>
  );
}
