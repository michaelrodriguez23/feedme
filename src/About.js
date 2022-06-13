import React, { useEffect } from "react";
import { Contact } from "./Contact";
import {
  Bio,
  Container,
  NetworkContainer,
  FeedContainer,
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
  // let words = ["🫣", "🫣"];

  useEffect(() => {
    // gsap.registerPlugin(TextPlugin, RoughEase);
    gsap.set(".net", { x: -400 });
    gsap.to(".net", {
      delay: 1,
      x: 0,
      y: 0,
      duration: 1.5,
      scale: 1,
      opacity: 1,
      yoyo: true,
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
      delay: 0.4,
      repeat: -1,
      repeatDelay: -1,
      onComplete: () => masterTL.pause(),
    });
    // words.forEach((word) => {
    //   let tl = gsap.timeline();
    //   tl.to(".bio", { duration: 1.6, text: word });
    //   masterTL.add(tl);
    // });
  });

  return (
    <Container>
      <Me id="me" src={process.env.PUBLIC_URL + "/assets/img/me.png"} />

      {emailActive ? (
        <Contact />
      ) : (
        <Bio className="michael">
          <ChannelsBox className="box"></ChannelsBox>
          <Text className="bio"></Text>
        </Bio>
      )}

      <NetworkContainer className="net">
        <Networks links={links} />
      </NetworkContainer>
    </Container>
  );
}
