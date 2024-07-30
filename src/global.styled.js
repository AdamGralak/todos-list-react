// global.styled.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    display: grid;
    grid-template-columns: minmax(300px, 750px);
    grid-gap: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    background-color: #efefef;
    justify-content: center;
    margin: 0;
    padding: 0; 
  }

  html {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}
`;
