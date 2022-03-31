import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Arena = require("are.na");

let token = process.env.REACT_APP_ARENA_KEY;

const arena = new Arena({
  accessToken: token,
});

const Photo = styled.img`
  width: 30vw;

  @media screen and (max-width: 500px) {
    width: 80vw;
  }
`;
const Caption = styled.p`
  font-size: 4vw;
  font-family: Helvetica, sans-serif;
  text-align: center;
  padding: 0;
`;
const DivContainer = styled.div`
  height: 100vh;
  width: 100vw;
  cursor: pointer;
`;
const DivFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 2em;
  padding: 2.5em;
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
    console.log(counter);
    if (counter < photos.length - 1) {
      SetCounter((prevCounter) => prevCounter + 1);
      setGallery((prevGalleries) => [...prevGalleries, photos[counter + 1]]);
    }
  }
  if (gallery.length < 1) {
    return <> loading... </>;
  }
  if (gallery.length == 1) {
    AppendPhoto();
  }

  function Galleries() {
    return (
      <>
        <h1> Click !</h1>
        <DivFlex>
          {gallery.slice(1).map((gallery, index) => (
            <PhotoContainer>
              <Photo
                src={gallery.image ? gallery.image.display.url : null}
                className={index % 2 == 1 ? "grow" : "shrink"}
              />
              <Caption> {gallery.title ? gallery.title : null} </Caption>
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
