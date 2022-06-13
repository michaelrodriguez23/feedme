import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { css } from "@emotion/react";
import { PulseLoaderContainer } from "./styles/Feed.styled";
import PulseLoader from "react-spinners/PulseLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "./styles/swiper.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import "swiper/css/navigation";
const Arena = require("are.na");
let token = process.env.REACT_APP_ARENA_KEY;

const arena = new Arena({
  accessToken: token,
});

const override = css`
  @media screen and (max-width: 450px) {
    position: absolute;
    left: 30vw;
    top: 70vw;
  }
`;
const Loading = styled.img`
  display: block;
  width: 2vw;
  margin: auto;
  filter: opacity(50%);
  @media screen and (max-width: 500px) {
    width: 50vw;
  }
`;
const DivContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;
const DivFlex = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  align-items: center;
  margin: auto;
  gap: 2em;
  width: 100vw;
  height: 100vh;
  max-height: 10000px;
  @media all and (max-width: 500px) {
  }
`;

export function PhotoFeed() {
  let [color, setColor] = useState("whitesmoke");

  let [loading, setLoading] = useState(true);

  let [photos, setPhotos] = useState([]);
  let [gallery, setGallery] = useState([]);
  let [counter, SetCounter] = useState(1);

  useEffect(() => {
    arena
      .channel("camera-roll-egwshzulkte")
      .contents({ page: 1, per: 50 })
      .then((contents) => {
        contents = contents.reverse();
        setPhotos(contents);
      })
      .then(() => {
        setGallery((prevGallery) => [...prevGallery, photos[counter + 2]]);
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function AppendPhoto() {
    if (counter < photos.length - 1) {
      SetCounter((prevCounter) => prevCounter + 1);
      setGallery((prevGalleries) => [...prevGalleries, photos[1]]);
    }
  }
  if (loading) {
    return (
      <PulseLoaderContainer>
        <PulseLoader
          color={color}
          className={loading ? "fade-in" : "fade-out"}
          loading={loading}
          css={override}
          size={60}
        />
      </PulseLoaderContainer>
    );
  }

  function Galleries() {
    return (
      <DivContainer>
        <Swiper className="mySwiper">
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img src={photo.image ? photo.image.display.url : null} />
            </SwiperSlide>
          ))}
        </Swiper>
      </DivContainer>
    );
  }

  return <Galleries gallery={gallery}> </Galleries>;
}
