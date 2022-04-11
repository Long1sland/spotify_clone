import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  grid-column: 1/7;
  grid-row: 13/15;
  background: #181818;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    border-radius: 50%;
    width: 3em;
    height: 3em;
    background: white;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
  }

  img {
    width: 1.5em;
  }

  #player {
    width: 50em;
    display: flex;
  }
`;

export const Slider = styled.input`
  width: 100%;
  :hover {
    -webkit-appearance: none;
    background: orange;
  }
`;
