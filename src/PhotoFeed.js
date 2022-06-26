import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import { gsap } from "gsap";

import "./styles/swiper.css";
import "swiper/swiper-bundle.min.css";

// import "swiper/css/navigation";
const Arena = require("are.na");
let token = process.env.REACT_APP_ARENA_KEY;

const arena = new Arena({
  accessToken: token,
});

const DivContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export function PhotoFeed() {
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
  }, []);

  function AppendPhoto() {
    if (counter < photos.length - 1) {
      SetCounter((prevCounter) => prevCounter + 1);
      setGallery((prevGalleries) => [...prevGalleries, photos[1]]);
    }
  }

  function Galleries() {
    useEffect(() => {
      gsap.set(".PhotoContainer", { x: 500, y: 0, scale: 0.7, opacity: 0 });
      gsap.to(".PhotoContainer", {
        id: "fadeSlideFrom",
        delay: 0.5,
        y: 0,
        x: 0,
        duration: 0.7,
        scale: 1,
        opacity: 1.2,
      });
    });
    SwiperCore.use([Navigation]);
    return (
      <DivContainer className="PhotoContainer">
        <Swiper
          modules={[Navigation]}
          navigation
          effect
          speed={400}
          loop
          className="mySwiper"
          grabCursor={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <Image src={photo.image ? photo.image.display.url : null} />
            </SwiperSlide>
          ))}
        </Swiper>
      </DivContainer>
    );
  }

  return <Galleries gallery={gallery}> </Galleries>;
}
