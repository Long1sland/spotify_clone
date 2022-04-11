import React, { Component, createRef, useEffect, useRef } from "react";
import { Content, Slider, Wrapper } from "./footer.styles";
import { useState } from "react";

const Footer = ({ currentTrackLocation, setIsPlaying, isPlaying }) => {
  console.log("rendered");
  const [currentAudio, setCurrentAudio] = useState(
    new Audio(currentTrackLocation)
  );
  const [currentTime, setCurrentTime] = useState();
  console.log(currentAudio.currentTime);
  const slider = createRef();

  useEffect(() => {
    setCurrentAudio((prev) => {
      prev.load();
      return new Audio(currentTrackLocation);
    });
  }, [currentTrackLocation]);

  useEffect(() => {
    if (currentTrackLocation === "") {
      return;
    }
    if (isPlaying) {
      currentAudio.play();
    } else {
      currentAudio.pause();
    }
  }, [currentAudio, isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current.value = Math.floor(currentAudio.currentTime);
      setCurrentTime(currentAudio.currentTime);
    }, 1000);
    console.dir(slider.current);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Wrapper>
      <Content>
        <button
          onClick={() => {
            setIsPlaying((prev) => !prev);
            console.log("clicked");
          }}
        >
          {isPlaying ? (
            <img src="./player/pause.png" />
          ) : (
            <img src="./player/play.png" />
          )}
        </button>
        <div id="player">
          <div>
            {`${Math.floor(currentTime / 60)}:${
              Math.floor(currentTime % 60) < 10
                ? "0" + Math.floor(currentTime % 60)
                : Math.floor(currentTime % 60)
            }`}
          </div>
          <Slider
            onClick={(e) => {
              setCurrentAudio((prev) => {
                prev.currentTime = e.target.value;
                return prev;
              });
            }}
            ref={slider}
            type="range"
            min="0"
            max={`${Math.floor(Number(currentAudio.duration))}`}
          ></Slider>
          <div>
            {`${Math.floor(currentAudio.duration / 60) || 0}:${Math.floor(
              currentAudio.duration % 60 || 0
            )}`}
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Footer;
