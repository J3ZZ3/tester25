import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    overflow-x: hidden;
  }

  /* Responsive text sizes */
  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }

  h2 {
    font-size: clamp(1.25rem, 4vw, 2rem);
  }

  p {
    font-size: clamp(1rem, 3vw, 1.2rem);
  }

  /* Responsive padding and margins */
  .container {
    padding: clamp(1rem, 5vw, 3rem);
    margin: 0 auto;
    max-width: 1200px;
  }

  /* Responsive images */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Media queries for different screen sizes */
  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle; 