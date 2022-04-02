import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
#root{
    background-image: linear-gradient(50deg,rgba(65,107,146),rgba(65,123,146,0.3) );
    height: 100vh ;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
}
body{
    margin: 0;
    padding: 0;
    
}
`;
