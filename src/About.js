import React, { useEffect } from "react";
import {
  Bio,
  Container,
  NetworkContainer,
  Me,
  Box,
  Text,
} from "./styles/About.styled.js";
import { gsap } from "gsap";
import { RoughEase } from "gsap/dist/EasePack";
import { TextPlugin } from "gsap/dist/TextPlugin";

import { links } from "./data.js";
import Networks from "./Networks.js";

export function About() {
  let words = [
    "Michael Elijah",
    "a programmer ",
    "an artist",
    "",
    "who is interested in the web",
    "",
    "as a means of exploration within",
    "",
    "cybernetics,",
    "decentralized protocols",
    "free culture [foss]",
    "and self expression!",
    "",
    "😈",
    "",
    "Feel free to look around!",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, RoughEase);
    gsap.set(".net", { y: 200 });
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

    words.forEach((word) => {
      let tl = gsap.timeline();
      tl.to(".bio", { duration: 1.5, text: word });
      masterTL.add(tl);
    });
  });

  return (
    <Container>
      {/* <audio className="audio-element">
        <source
          src={process.env.PUBLIC_URL + "/assets/music/sound-on.mp4"}
        ></source>
      </audio> */}
      <Me id="me" src={process.env.PUBLIC_URL + "/assets/img/me.png"} />
      <Bio className="michael">
        <Box className="box"></Box>
        <Text className="bio"></Text>
        <span className="cursor"> _</span>
      </Bio>

      <NetworkContainer className="net">
        <Networks links={links} />
      </NetworkContainer>
    </Container>
  );
}
