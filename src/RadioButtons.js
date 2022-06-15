import React from "react";
import styled from "styled-components";
import "./styles/RadioButtons.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  padding: 0.4em;
  position: sticky;
  left: 2%;
  top: 1%;
  text-align: center;
  gap: 0.3em;
  z-index: 5;
  margin-bottom: 3.5em;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  top: 0.4em;
  margin: auto;
  flex-direction: column;
  font-size: 1.3em;
  flex-wrap: wrap;
  width: 15em;
  @media screen and (max-width: 450px) {
    left: 1%;
  }
`;

export default function RadioButtons(props) {
  return (
    <Wrapper>
      <ButtonWrapper>
        <form>
          <input
            type="radio"
            value="Works"
            id="radio1"
            name="feedOption"
            defaultChecked
            onClick={(active) => props.changeRadioState(0)}
          />
          <label for="radio1"> works </label>
          <input
            type="radio"
            id="radio2"
            value="Reads"
            name="feedOption"
            onClick={(active) => props.changeRadioState(1)}
          />
          <label for="radio2"> reads </label>
          <input
            type="radio"
            id="radio3"
            value="Photos"
            name="feedOption"
            onClick={(active) => props.changeRadioState(2)}
          />
          <label for="radio3"> photos </label>
          <input
            type="radio"
            id="radio4"
            value="email"
            name="feedOption"
            onClick={(active) => props.changeRadioState(3)}
          />
          <label for="radio4"> contact </label>
        </form>
      </ButtonWrapper>
    </Wrapper>
  );
}
