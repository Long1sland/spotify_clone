import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  grid-area: 2 / 2 / 13 / 7;
  background: #121212;
  font-size: 70px;
  overflow-y: scroll;
  word-wrap: break-word;
  padding: 1rem;
  user-select: none;

  ::-webkit-scrollbar {
    width: 0.3rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }
`;
