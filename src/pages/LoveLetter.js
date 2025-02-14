// src/pages/LoveLetter.js
import AnimatedPage from "../components/AnimatedPage";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 50px;
  color: white;
  max-width: 600px;
  margin: auto;
`;

const Letter = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  white-space: pre-line;
`;

const LoveLetter = () => {
  return (
    <AnimatedPage>
      <Container>
        <h1>My Love Letter to You ❤️</h1>
        <Letter>
          {`Sienna, My Love,

From the moment you came into my life, everything changed. You are the light in my darkest days, the warmth in my coldest nights, and the love that fills my heart beyond words.

Every smile of yours melts my worries away, and every laugh is music to my soul. I am endlessly grateful for your kindness, your strength, and the way you love so effortlessly.

No matter where life takes us, my heart will always belong to you. You are my greatest adventure, my sweetest dream, and my forever Valentine.

I love you more than words can ever express, today and always.

Forever yours,
Jesse`}
        </Letter>
      </Container>
    </AnimatedPage>
  );
};

export default LoveLetter;