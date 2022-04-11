import React from "react";
import useDataFetch from "../../Hooks/useDataFetch";
import { Wrapper } from "./main.styles";
import Section from "../Section/section";

const Main = ({
  setCurrentTrackLocation,
  setIsPlaying,
  currentTrackLocation,
  isPlaying,
}) => {
  const {
    recentlyPlayed,
    setRecentlyPlayed,
    recommended,
    newReleases,
    relatedArtists,
    artistsTopTracks,
    featuredPlaylists,
    playlist,
  } = useDataFetch();

  return (
    <Wrapper>
      <Section
        setCurrentTrackLocation={setCurrentTrackLocation}
        allData={recentlyPlayed}
        setPlayState={setRecentlyPlayed}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrackLocation={currentTrackLocation}
      >
        Recently played
      </Section>
      <Section
        allData={recommended}
        setCurrentTrackLocation={setCurrentTrackLocation}
        setIsPlaying={setIsPlaying}
        currentTrackLocation={currentTrackLocation}
      >
        Recommended For You
      </Section>
      <Section
        allData={newReleases}
        setCurrentTrackLocation={setCurrentTrackLocation}
        setIsPlaying={setIsPlaying}
        currentTrackLocation={currentTrackLocation}
      >
        New Releases
      </Section>
      <Section
        allData={relatedArtists}
        isArtist={true}
        setCurrentTrackLocation={setCurrentTrackLocation}
        setIsPlaying={setIsPlaying}
        currentTrackLocation={currentTrackLocation}
      >
        {relatedArtists ? `More Like ${relatedArtists[0].seedArtist}` : ""}
      </Section>
      <Section
        allData={artistsTopTracks}
        setCurrentTrackLocation={setCurrentTrackLocation}
        setIsPlaying={setIsPlaying}
        currentTrackLocation={currentTrackLocation}
      >
        {artistsTopTracks
          ? `${artistsTopTracks[0].seedArtist}'s Top Tracks`
          : ""}
      </Section>
      <Section
        allData={featuredPlaylists}
        setCurrentTrackLocation={setCurrentTrackLocation}
        setIsPlaying={setIsPlaying}
        currentTrackLocation={currentTrackLocation}
      >
        Featured Playlists
      </Section>
      <Section
        allData={playlist}
        setCurrentTrackLocation={setCurrentTrackLocation}
        setIsPlaying={setIsPlaying}
        currentTrackLocation={currentTrackLocation}
      >
        From Your Playlist
      </Section>
    </Wrapper>
  );
};

export default Main;
