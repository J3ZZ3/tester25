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

const GlowingText = styled.h1`
  font-size: 2rem;
  color: white;
  text-shadow: 0 0 10px #ff7eb3, 0 0 20px #ff4d6d;
  animation: pulse 2s infinite alternate;

  @keyframes pulse {
    from { text-shadow: 0 0 5px #ff7eb3, 0 0 10px #ff4d6d; }
    to { text-shadow: 0 0 15px #ff4d6d, 0 0 25px #ff0033; }
  }
`;

const HeartBeat = styled.div`
  font-size: 3rem;
  color: red;
  animation: beat 1s infinite alternate;

  @keyframes beat {
    from { transform: scale(1); }
    to { transform: scale(1.2); }
  }
`;

const Letter = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: left;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-top: 2rem;
`;

const LoveLetter = () => {
  return (
    <AnimatedPage>
      <Container>
        <GlowingText>My Love Letter to You ❤️</GlowingText>
        <HeartBeat>❤️</HeartBeat>
        <Letter>
          Sienna, My Love,

          From the moment you came into my life, everything changed. You are the light in my darkest days, the warmth in my coldest nights, and the love that fills my heart beyond words.

          Every smile of yours melts my worries away, and every laugh is music to my soul. I am endlessly grateful for your kindness, your strength, and the way you love so effortlessly.

          No matter where life takes us, my heart will always belong to you. You are my greatest adventure, my sweetest dream, and my forever Valentine.

          I love you more than words can ever express, today and always.

          Forever yours,
          Jesse
        </Letter>
      </Container>
    </AnimatedPage>
  );
};

export default LoveLetter;