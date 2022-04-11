import React from "react";
import InfoCard from "../InfoCards/infoCards";
import { Wrapper } from "./section.styles";
import { Content } from "./section.styles";

const Section = ({
  children,
  allData,
  setPlayState,
  isArtist,
  setCurrentTrackLocation,
  setIsPlaying,
  currentTrackLocation,
  isPlaying,
}) => {
  return (
    <>
      {allData ? (
        <Wrapper>
          <h1>{children}</h1>
          <Content>
            {allData.map((data, i) => {
              const { artist, image, songName, previewUrl } = data;
              return (
                <InfoCard
                  isPlaying={isPlaying}
                  currentTrackLocation={currentTrackLocation}
                  setCurrentTrackLocation={setCurrentTrackLocation}
                  previewUrl={previewUrl}
                  isArtist={isArtist}
                  key={i}
                  artist={artist}
                  image={image}
                  songName={songName}
                  setIsPlaying={setIsPlaying}
                  playState={allData}
                  setPlayState={setPlayState}
                  index={i}
                ></InfoCard>
              );
            })}
          </Content>
        </Wrapper>
      ) : null}
    </>
  );
};

export default Section;
