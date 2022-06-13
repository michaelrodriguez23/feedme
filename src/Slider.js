import React from "react";
import styled from "styled-components";
import { ToggleSlider } from "react-toggle-slider";

const SliderWrapper = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  z-index: 10;
`;

function Slider(props) {
  return (
    <SliderWrapper>
      <ToggleSlider
        handleBackgroundColor="#fff"
        draggable={true}
        barHeight={22}
        barWidth={46}
        handleSize={16}
        handleBorderRadius={32}
        syles="position: absolute; left:1px;"
        onToggle={(active) => props.changeSliderState(active)}
      />
    </SliderWrapper>
  );
}

export { Slider };
