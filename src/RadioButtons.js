import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1em;
`;

export default function RadioButtons(props) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
