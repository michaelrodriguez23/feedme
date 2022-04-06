import React, { useEffect, useState } from "react";
import styled from "styled-components";

export function About() {
  var i = 0;
  var txt =
    " is a web developer who is interested in the internet as an emerging social space. ";

  /* The text */
  var speed = 60; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length && document.getElementById("bio")) {
      document.getElementById("bio").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      document.getElementById("me").style.bottom = "0";
    } else {
      return null;
    }
  }

  const Container = styled.div`
    background-color: white;
    height: 100vh;
  `;

  const About = styled.p`
    font-family: monospace !important;
    position: relative;
    left: 1vw;
    font-size: 4.4vw;
    color: lightcoral;
    width: 80vw;
    height: 100vw;
    padding: 1em;
    margin: 0;

    @media all and (max-width: 500px) {
      font-size: 5vw;
      padding-left: 1em;
    }
  `;
  const Me = styled.img`
    position: absolute;
    bottom: -40%;
    right: 5%;
    height: 50%;
    transition: ease-out 0.4s;

    &:hover {
      filter: opacity(10%);
    }
  `;
  let audioEl = new Audio("./assets/music/sound-on.mp4");
  const Playit = () => {
    audioEl.play();
  };
  useEffect(() => {
    typeWriter();
    // Playit();
  }, 100);

  return (
    <Container>
      <audio className="audio-element">
        <source
          src={process.env.PUBLIC_URL + "/assets/music/sound-on.mp4"}
        ></source>
      </audio>
      <About id="bio">
        Michael Elijah <hr />
      </About>
      <Me id="me" src={process.env.PUBLIC_URL + "/assets/img/me.png"} />
    </Container>
  );
}
