import styled from "styled-components";

export const Wrapper = styled.section`
  font-size: 20px;
  background: #131313;
  margin-bottom: 10px;

  p {
    color: white;
  }

  h1 {
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 20px;
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;
