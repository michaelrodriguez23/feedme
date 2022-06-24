import React, { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import "./styles/RadioButtons.css";

const Wrapper = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;
const Button = styled.div`
  flex: 1;
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
    <ButtonWrapper>
      <Button>
        <input
          type="radio"
          id="radio5"
          value="about"
          name="feedOption"
          defaultChecked
          onClick={(active) => props.changeRadioState(0)}
        />

        <label for="radio5"> about </label>
      </Button>

      <Button>
        <input
          type="radio"
          value="Works"
          id="radio1"
          name="feedOption"
          onClick={(active) => props.changeRadioState(1)}
        />
        <label for="radio1"> works </label>
      </Button>

      <Button>
        <input
          type="radio"
          id="radio2"
          value="Reads"
          name="feedOption"
          onClick={(active) => props.changeRadioState(2)}
        />
        <label for="radio2"> reads </label>
      </Button>

      <Button>
        <input
          type="radio"
          id="radio3"
          value="Photos"
          name="feedOption"
          onClick={(active) => props.changeRadioState(3)}
        />
        <label for="radio3"> camera roll </label>
      </Button>

      <Button>
        <input
          type="radio"
          id="radio4"
          value="email"
          name="feedOption"
          onClick={(active) => props.changeRadioState(4)}
        />
        <label for="radio4"> contact </label>
      </Button>
    </ButtonWrapper>
  );
}
