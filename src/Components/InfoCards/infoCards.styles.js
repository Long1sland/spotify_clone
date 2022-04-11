import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  padding-bottom: 20px;
  height: 270px;
  width: 182px;
  margin-right: 3rem;
  background: #171717;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  position: relative;

  :hover {
    background: #252525;

    button {
      top: 110px;
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  #track_image {
    width: 150px;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
  #track_image.round {
    border-radius: 50% !important;
  }
  p {
    font-size: 0.8rem;
    color: #a3a3a3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  h4 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0;
  }
  button {
    position: absolute;
    background: #21db63;
    top: 116px;
    left: 111px;
    border-radius: 50%;
    border: none;
    width: 3rem;
    height: 3rem;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 5px 10px #2d2d2d;

    #buttonImage {
      width: 1rem;
    }
  }
`;
