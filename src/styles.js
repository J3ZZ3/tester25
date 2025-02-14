// src/styles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(-45deg, #ff758c, #ff7eb3, #ff4d6d, #ff0033);
    background-size: 400% 400%;
    animation: gradientBG 10s infinite ease-in-out;

    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  }
`;

export default GlobalStyle;