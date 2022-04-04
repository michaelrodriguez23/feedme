import React, { useState } from "react";
import styled from "styled-components";
export function Contact() {
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

  const ContactContainer = styled.div`
    padding-top: 5em;

    filter: opacity(40%);
  `;
  const Form = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    margin: auto;
  `;

  const Input = styled.input`
    height: 3vh;
    font-size: 3vh;
  `;
  const Send = styled.input`
    height: 5vh;
    width: 10vh;
    font-size: 3vh;
  `;
  const Text = styled.textarea`
    height: 5vh;
    font-size: 2.2vh;
  `;
  return (
    <ContactContainer>
      <Form
        id="contactForm"
        action="https://formsubmit.co/socialbug001@yahoo.com"
        method="POST"
      >
        <Input type="hidden" name="_next" value="" />
        <Input
          type="email"
          name="_captcha"
          placeholder="someone@email.com"
          required
        />
        <Input type="hidden" name="_captcha" value="false" />

        <Text
          id="message"
          name="message"
          placeholder="Send your thoughts this way!"
        ></Text>

        <Send type="submit" value="Send" />
      </Form>
    </ContactContainer>
  );
}
