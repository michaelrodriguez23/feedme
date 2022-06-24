import React, { useEffect } from "react";
import { Contact } from "./Contact";
import {
  Bio,
  Container,
  NetworkContainer,
  Me,
  ChannelsBox,
  FeedsBox,
  Text,
} from "./styles/About.styled.js";
import { gsap } from "gsap";
import { RoughEase } from "gsap/dist/EasePack";
import { TextPlugin } from "gsap/dist/TextPlugin";

import { links } from "./data.js";
import Networks from "./Networks.js";

export function About({ emailActive }) {
  useEffect(() => {
    // gsap.registerPlugin(TextPlugin, RoughEase);
    gsap.set(".MePic", { x: -20, y: -20 });
    gsap.to(".MePic", {
      delay: 1,
      x: 20,
      y: -20,
      duration: 1,
      opacity: 1,
    });
    gsap.set(".net", { x: -400 });
    gsap.to(".net", {
      delay: 0.2,
      x: 0,
      y: 0,
      duration: 1.5,
      scale: 1,
      opacity: 1,
      yoyo: true,
    });
    gsap.set(".AboutContainer", { opacity: 0 });
    gsap.to(".AboutContainer", {
      id: "fadeSlideFrom",
      delay: 0.3,
      y: 0,
      x: 0,
      duration: 1,
      scale: 1,
      opacity: 1.2,
    });

    gsap.set(".cursor", { opacity: 1 });
    gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });
    var boxTL = gsap.timeline();
    boxTL.from(".bio", {
      duration: 1.5,
      ease: "rough",
      onComplete: () => masterTL.play(),
    });
    let masterTL = gsap.timeline({
      repeat: -1,
      repeatDelay: -1,
      onComplete: () => masterTL.pause(),
    });
  });

  return (
    <Container className="AboutContainer">
      <Me
        id="me"
        className="MePic"
        src={process.env.PUBLIC_URL + "/assets/img/me.png"}
      />

      {emailActive ? <Contact /> : null}
      <Bio>
        <span>
          {" "}
          [Michael Elijah] is a programmer, and a new media artist. Who is
          interested in the web as a cultural social space, and format for
          expression.{" "}
        </span>
      </Bio>
      <NetworkContainer className="net">
        <Networks links={links} />
      </NetworkContainer>
    </Container>
  );
}
