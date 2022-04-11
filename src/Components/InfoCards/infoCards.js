import React, { useContext } from "react";

import { Content, Wrapper } from "./infoCards.styles";

const InfoCard = ({
  image,
  artist,
  isArtist,
  songName,
  isPlaying,
  previewUrl,
  currentTrackLocation,
  setCurrentTrackLocation,
  setIsPlaying,
  index,
  playState,
  setPlayState,
}) => {
  console.log(playState);
  return (
    <Wrapper>
      <Content>
        <img
          id="track_image"
          src={image}
          className={isArtist ? "round" : null}
        ></img>
        <h4>{isArtist ? `${artist}` : `${songName}`}</h4>
        <p>{isArtist ? "Artist" : `By ${artist}`}</p>
        {previewUrl && (
          <button
            onClick={() => {
              if (
                currentTrackLocation === previewUrl ||
                currentTrackLocation === ""
              ) {
                setCurrentTrackLocation(previewUrl);
                setIsPlaying((prev) => !prev);
              } else {
                setCurrentTrackLocation(previewUrl);
              }
            }}
          >
            <img
              id="buttonImage"
              src={isPlaying ? `./player/pause.png` : `./player/play.png`}
            />
          </button>
        )}
      </Content>
    </Wrapper>
  );
};

export default InfoCard;
