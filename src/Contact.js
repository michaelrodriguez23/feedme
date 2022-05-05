import React, { useState, useEffect } from "react";

import PulseLoader from "react-spinners/PulseLoader";
import {
  Send,
  Input,
  Text,
  Header,
  Form,
  PulseLoaderContainer,
  Container,
  ContactContainer,
} from "./styles/Contact.styled";

import { css } from "@emotion/react";
import { gsap } from "gsap";

export function Contact() {
  let [color, setColor] = useState("whitesmoke");
  let [loading, setLoading] = useState(true);

  const override = css`
    @media screen and (max-width: 450px) {
    }
  `;

  useEffect(() => {
    gsap.set(".contactForm", { x: 0, y: 400, scale: 0.7, opacity: 0 });
    gsap.set(".emailIcon", { x: 0, y: -200, scale: 0.3, opacity: 0 });
    gsap.to(".emailIcon", {
      delay: 0.5,
      y: 0,
      duration: 1.4,
      scale: 1,
      opacity: 1.2,
      yoyo: true,
    });

    gsap.to(".contactForm", {
      delay: 0.5,
      y: 0,
      duration: 1,
      scale: 1,
      opacity: 0.9,
      yoyo: true,
    });

    setTimeout(() => {
      setLoading(false);
    }, 200);
  });

  return (
    <>
      {!loading ? (
        <Container>
          <ContactContainer className="contactForm">
            <Form
              id="contactForm"
              action="https://formsubmit.co/e16bb3ee82ad224e112d4e0bb818a77a"
              method="POST"
            >
              <Header className="emailIcon">
                <span>📧 </span>{" "}
              </Header>
              <Input type="hidden" name="_next" value="" />
              <Input
                type="email"
                name="_captcha"
                placeholder="email"
                required
              />
              <Input type="hidden" name="_captcha" value="false" />
              <Text id="message" name="message" placeholder="message"></Text>
              <Send type="submit" value="Send" />
            </Form>
          </ContactContainer>
        </Container>
      ) : (
        <Container>
          <PulseLoaderContainer>
            <PulseLoader
              color={color}
              className={loading ? "fade-in" : "fade-out"}
              loading={loading}
              css={override}
              size={50}
            />
          </PulseLoaderContainer>
        </Container>
      )}
    </>
  );
}
