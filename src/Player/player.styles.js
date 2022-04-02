import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";

export const Container = styled.div`
  width: 43vmin;
  min-width: 280px;
  height: 40vmax;
  min-height: 390px;
  background-color: white;
  border-radius: 2vmin;
  padding: 3vmin;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TrackArt = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  height: 36vmin;
  width: 36vmin;
  border-radius: 2vmin;
  margin: 0px auto;
  background-position: center;
  background-size: cover;
`;
export const Track = styled.div`
  font-size: 2em;
  height: 50px;
  text-align: center;
`;
export const Slider = styled.input``;
export const MediaButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vmin;
  margin: 0 auto;

  #next_track {
    height: 20px;
  }

  #prev_track {
    height: 20px;
    transform: rotate(180deg);
  }

  #play {
    height: 50px;
  }

  #pause {
    height: 50px;
  }
`;
export const Shuffle = styled.button`
  background-color: darkblue;
  height: 7vmin;
  color: white;
  width: 30vmin;
  margin: 0 auto;
  border-radius: 2vmin;
  display: flex;
  justify-content: center;
  align-items: center;
`;
