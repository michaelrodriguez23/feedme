import React, { useState } from "react";
import styled from "styled-components";
export function Contact() {
  const Info = styled.p`
    font-size: 5vw;
    color: blue;
    padding: 1em;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
  `;

  return (
    <div id="contact-container">
      <Info> socialbug001 (at) yahoo (dot) com </Info>
    </div>
  );
}
