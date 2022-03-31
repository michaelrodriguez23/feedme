import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Webamp from "webamp";
import appleSkin from "./assets/skins/apple_amp.wsz";
const Arena = require("are.na");

function MapSongs(props) {
  return (
    <ul>
      {props.songs
        .slice(0)
        .reverse()
        .map((song, index) => (
          <li key={song.id}>
            <p>{index}</p>
            <img class="thumbnail" src={song.image.display.url}></img>
            <a href={song.source.url}> {song.title} </a>
          </li>
        ))}
    </ul>
  );
}
export function SongFeed() {
  let token = process.env.REACT_APP_ARENA_KEY;
  const arena = new Arena({
    accessToken: token,
  });

  let [songs, setSongs] = useState([]);

  useEffect(() => {
    // arena
    //   .channel("la-musica")
    //   .contents({ per: 20 })
    //   .then((contents) => setSongs(contents))
    //   .catch((err) => console.log(err));

    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: " Art of Noise",
            title: "Moments in Love (slowed + pitched)",
          },

          url:
            process.env.PUBLIC_URL +
            "./assets/music/Moment in Love - Art of Noise (slowed + pitched).mp3",
        },
      ],
      initialSkin: {
        url: process.env.PUBLIC_URL + appleSkin,
      },
    });

    webamp.renderWhenReady(document.getElementById("winamp-container"));
    webamp.appendTracks([
      {
        url:
          "./assets/music/Moment in Love - Art of Noise (slowed + pitched).mp3",
      },
    ]);
  }, []);

  shuffleArray(songs);

  function shuffleArray(songs) {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = songs[i];
      songs[i] = songs[j];
      songs[j] = temp;
    }
  }
  const Winamp = styled.div`
    position: absolute;
    top: 50%;
    left: 80%;
    filter: drop-shadow(30px 10px 4px #4444dd);
  `;

  return (
    <div>
      <Winamp id="winamp-container"></Winamp>
      {/* {<MapSongs songs={songs}> </MapSongs>} */}
    </div>
  );
}
