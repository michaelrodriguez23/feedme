import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  position: absolute;
  height: auto;
  top: 0.1em;
  left: 0.2em;
  font-size: 3em;
  z-index: 10;
  transition: all 0.5s;
  &:hover {
    filter: opacity(50%);
    transform: translateY(-5px);
  }
`;

function EmailButton(props) {
  return (
    <div>
      <Icon onClick={(emailActive) => !props.changeEmailState(emailActive)}>
        📧
      </Icon>
    </div>
  );
}

export { EmailButton };
