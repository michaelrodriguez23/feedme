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
    height: 40vh;
    width: 100vw;

    filter: opacity(40%);
  `;
  const Form = styled.form`
    position: relative;
    width: 20em;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 2em;
    margin: auto;
  `;

  const Input = styled.input`
    height: 1em;
    font-size: 2em;
  `;
  const Send = styled.input`
    height: 2em;
    width: 5em;
    font-size: 1em;
  `;
  const Text = styled.textarea`
    height: 5em;
    font-size: 2em;
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
