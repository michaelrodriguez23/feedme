import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ToggleSlider } from "react-toggle-slider";
import { gsap } from "gsap";

const SliderWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 960px) {
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) */
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 90%;
    z-index: 0;
  }
`;

let width = window.screen.width;
let onMobile;
if (width > 800) {
  onMobile = false;
} else {
  onMobile = true;
}

function Slider(props) {
  useEffect(() => {
    gsap.set(".SliderWrap", { opacity: 1 });
    if (props.active) {
      gsap.to(".SliderWrap", {
        y: 0,
        duration: 1,
        scale: 1,
        opacity: 0,
      });
    }
  });

  return (
    <SliderWrapper className="SliderWrap">
      <ToggleSlider
        handleBackgroundColor="#fff"
        draggable={true}
        barHeight={82}
        barWidth={240}
        handleSize={78}
        handleBorderRadius={90}
        padding={5}
        barTransitionType="fade"
        barBackgroundColorActive="#78c5ef"
        onToggle={(active) => props.changeSliderState(active)}
      />
    </SliderWrapper>
  );
}

export { Slider };
