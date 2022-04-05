import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

export function Contact() {
  let emailIcon = useRef(null);
  let contactForm = useRef(null);

  useEffect(() => {
    gsap.set(".contactForm", { x: 0, y: 400, scale: 0.7, opacity: 0 });

    gsap.set(".emailIcon", { x: 0, y: -200, scale: 0.3, opacity: 0 });
    gsap.to(".emailIcon", {
      y: 0,
      duration: 1.4,
      scale: 1,
      opacity: 1.2,
      yoyo: true,
    });
    gsap.to(".contactForm", {
      y: 0,
      duration: 1,
      scale: 1,
      opacity: 0.9,
      yoyo: true,
    });
  });

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
    height: 10vh;
    width: 100%;
    border-radius: 500em;
  `;
  const Form = styled.form`
    padding-top: 2em;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    margin: auto;
  `;

  const Input = styled.input`
    height: 4vh;
    width: 40vw;
    font-size: 3vh;
    border-radius: 0.2em;
    text-align: center;
    @media screen and (max-width: 450px) {
      font-size: 2vh;
      width: 60vw;
    }
  `;
  const Send = styled.input`
    height: 3vh;
    width: 10vh;
    font-size: 2vh;
    background-color: light;
  `;
  const Text = styled.textarea`
    height: 10vh;
    width: 40vw;
    border-radius: 0.2em;
    text-align: center;
    font-size: 4vh;
    @media screen and (max-width: 450px) {
      font-size: 3vh;
      width: 60vw;
    }
  `;
  const Header = styled.h1`
    font-size: 20.2vh;
    filter: drop-shadow(1vh 1vh 0.7vh lightblue);
    font-family: Arial, Helvetica, sans-serif;
  `;
  return (
    <ContactContainer className="contactForm">
      <Form
        id="contactForm"
        action="https://formsubmit.co/e16bb3ee82ad224e112d4e0bb818a77a"
        method="POST"
      >
        {" "}
        <Header className="emailIcon">📧</Header>
        <Input type="hidden" name="_next" value="" />
        <Input
          type="email"
          name="_captcha"
          placeholder="your-email@whatever.com"
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
