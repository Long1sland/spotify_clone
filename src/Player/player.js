import React, { createRef, useEffect, useState } from "react";

import {
  TrackArt,
  Container,
  MediaButtons,
  Shuffle,
  Slider,
  Track,
} from "./player.styles";

const Player = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const slider = createRef();
  console.log(currentTrack);

  const [trackData, setTrackData] = useState([
    {
      song: "../music/Angel_In_Your_Eyes.mp3",
      image: "./TrackImages/Generic.png",
      id: 1,
    },
    { song: "../music/Audio.mp3", image: "./TrackImages/audio.jpg", id: 2 },
    { song: "../music/Genius.mp3", image: "./TrackImages/Genius.jpg", id: 3 },
    {
      song: "../music/Heaven_Can_Wait.mp3",
      image: "./TrackImages/Heaven_Can_Wait.jpg",
      id: 4,
    },
    {
      song: "../music/Its_Time.mp3",
      image: "./TrackImages/Generic.png",
      id: 5,
    },
    {
      song: "../music/Mountains.mp3",
      image: "./TrackImages/Mountains.jpg",
      id: 6,
    },
    {
      song: "../music/No_New_Friends.mp3",
      image: "./TrackImages/No_New_Friends.png",
      id: 7,
    },
    {
      song: "../music/Thunderclouds.mp3",
      image: "./TrackImages/Thunderclouds.jpg",
      id: 8,
    },
    {
      song: "../music/Welcome_To_The_Wonderful_World.mp3",
      image: "./TrackImages/Generic.png",
      id: 9,
    },
  ]);
  const [currentSong, setCurrentSong] = useState(
    new Audio(`${trackData[0].song}`)
  );
  console.log(currentSong.currentTime);
  useEffect(() => {
    if (isPlaying) {
      currentSong.play();
      console.log("playing");
    } else {
      currentSong.pause();
      console.log("pausing");
    }
  }, [isPlaying, currentSong]);

  useEffect(() => {
    setCurrentSong((prev) => {
      prev.load();
      return new Audio(`${trackData[currentTrack].song}`);
    });
    return;
  }, [currentTrack, trackData]);

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current.value = Math.floor(currentSong.currentTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Container>
      <TrackArt image={trackData[currentTrack].image}></TrackArt>
      <Track>{`Track ${currentTrack}`}</Track>
      <Slider
        onClick={(e) => {
          setCurrentSong((prev) => {
            prev.currentTime = e.target.value;
            return prev;
          });
          console.log("i'm the slider and I have been clicked");
        }}
        ref={slider}
        type="range"
        min="0"
        max={`${Math.floor(Number(currentSong.duration))}`}
      ></Slider>

      <MediaButtons>
        <img
          alt="prev"
          src="./skip-track.png"
          id="prev_track"
          onClick={() => {
            if (currentTrack === 0) {
              setCurrentTrack(trackData.length - 1);
              return;
            }
            setCurrentTrack((prev) => prev - 1);
            console.log("back");
          }}
        ></img>
        {!isPlaying && (
          <img
            alt="play/pause"
            src="./play-button.png"
            id="play"
            onClick={() => {
              setIsPlaying((prev) => !prev);
              console.log("pause/play");
            }}
          ></img>
        )}
        {isPlaying && (
          <img
            alt="play/pause"
            src="./pause.png"
            id="pause"
            onClick={() => {
              setIsPlaying((prev) => !prev);
              console.log("pause/play");
            }}
          ></img>
        )}
        <img
          alt="next"
          id="next_track"
          src="./skip-track.png"
          onClick={() => {
            if (currentTrack === trackData.length - 1) {
              setCurrentTrack(0);
              return;
            }

            console.log("forward");
            setCurrentTrack((prev) => prev + 1);
          }}
        ></img>
      </MediaButtons>
      <Shuffle
        onClick={() => {
          setCurrentTrack(Math.floor(Math.random() * 8));
        }}
      >
        Shuffle
      </Shuffle>
    </Container>
  );
};

export default Player;
