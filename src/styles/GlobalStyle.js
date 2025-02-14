import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Arial', sans-serif;
    overflow-x: hidden;
    background: linear-gradient(45deg, #ff69b4, #ff1493);
    color: white;
    min-height: 100vh;
    position: relative;
    
    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, #ff69b4, #ff1493);
      z-index: -1;
    }
  }

  /* Responsive text sizes */
  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: clamp(1.25rem, 4vw, 2rem);
    color: white;
  }

  p {
    font-size: clamp(1rem, 3vw, 1.2rem);
    color: white;
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

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
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