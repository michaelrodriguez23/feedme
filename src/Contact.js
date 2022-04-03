import React, { useState } from "react";
import styled from "styled-components";
export function Contact() {
  const Info = styled.p`
    display: block;
    font-size: 4vh;
    color: yellow;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
  `;

  const ContactContainer = styled.div`
    background-color: black !important;
    height: 100vh;
  `;

  return (
    <ContactContainer>
      <Info> socialbug001 (at) yahoo (dot) com </Info>
    </ContactContainer>
  );
}
