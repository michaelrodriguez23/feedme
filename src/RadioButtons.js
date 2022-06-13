import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  width: 17em;
  padding: 0.4em;

  position: sticky;
  left: 2%;
  top: 1%;
  text-align: center;
  gap: 0.3em;
  z-index: 5;
`;
const ButtonWrapper = styled.div`
  margin: auto;
  flex-direction: column;
  font-size: 1.3em;
  flex-wrap: wrap;
  width: 12em;
`;

export default function RadioButtons(props) {
  return (
    <Wrapper>
      <ButtonWrapper>
        <input
          type="radio"
          value="Works"
          name="feedOption"
          defaultChecked
          onClick={(active) => props.changeRadioState(0)}
        />
        works
        <input
          type="radio"
          value="Reads"
          name="feedOption"
          onClick={(active) => props.changeRadioState(1)}
        />
        reads
        <input
          type="radio"
          value="Photos"
          name="feedOption"
          onClick={(active) => props.changeRadioState(2)}
        />
        photos
      </ButtonWrapper>
    </Wrapper>
  );
}
