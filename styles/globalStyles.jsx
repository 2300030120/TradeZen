// src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    color: #333;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyles;
