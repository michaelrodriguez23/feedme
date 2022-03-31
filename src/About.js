import React, { useEffect, useState } from "react";
import styled from "styled-components";
import me from "./assets/img/me.png";

export function About() {
  var i = 0;
  var txt =
    " I am Michael! I explore the realms of web-development, augmented reality, film, and design.";

  /* The text */
  var speed = 80; /* The speed/duration of the effect in milliseconds */

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

  const About = styled.p`
    position: relative;
    left: 1vw;
    font-size: 4.4vw;
    color: blue;
    font-family: Arial, Helvetica, sans-serif;
    width: 80vw;
    height: 40vw;
    padding: 1em;
    margin: 0;
  `;
  const Me = styled.img`
    position: absolute;
    bottom: -40%;
    right: 5%;
    height: 40%;
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
    Playit();
  }, 100);

  return (
    <div>
      <audio className="audio-element">
        <source
          src={process.env.PUBLIC_URL + "/assets/music/sound-on.mp4"}
        ></source>
      </audio>
      <About id="bio">
        Hiii! <hr />
      </About>
      <Me src={process.env.PUBLIC_URL + me} />
    </div>
  );
}
