import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Arena = require("are.na");

let token = process.env.REACT_APP_ARENA_KEY;

const arena = new Arena({
  accessToken: token,
});

const Loading = styled.img`
  display: block;
  width: 5vw;
  margin: auto;
  filter: opacity(50%);
  @media screen and (max-width: 500px) {
    width: 50vw;
  }
`;

const Photo = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: contain;
  vertical-align: bottom;
  width: 10vw;
  margin: 1em;
  flex-grow: 1;

  @media screen and (max-width: 500px) {
    height: 50vh;
  }
`;
const Caption = styled.p`
  font-size: 1vmin;
  font-family: Helvetica, sans-serif;
  text-align: center;
  padding: 0;
`;
const DivContainer = styled.div`
  flex-grow: 1;
`;
const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media all and (max-width: 500px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0;
    padding: 0;
  }
`;
const PhotoContainer = styled.div``;

export function PhotoFeed() {
  let [photos, setPhotos] = useState([]);
  let [gallery, setGallery] = useState([]);
  let [counter, SetCounter] = useState(1);

  useEffect(() => {
    arena
      .channel("photodrop")
      .contents()
      .then((contents) => {
        setPhotos(contents);
      })
      .then(() => {
        photos.reverse();
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
  if (gallery.length < 1) {
    return (
      <Loading
        src={process.env.PUBLIC_URL + "./assets/img/load.gif"}
        alt="loading"
      />
    );
  }
  if (gallery.length == 1) {
    AppendPhoto();
  }

  function Galleries() {
    return (
      <>
        <DivFlex>
          {photos.map((photo, index) => (
            <PhotoContainer>
              <Photo src={photo.image ? photo.image.display.url : null} />
            </PhotoContainer>
          ))}
        </DivFlex>
      </>
    );
  }

  return (
    <DivContainer onClick={AppendPhoto} photos={photos}>
      <Galleries gallery={gallery}> </Galleries>
    </DivContainer>
  );
}
