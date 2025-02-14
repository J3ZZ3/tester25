// src/pages/Home.js
import AnimatedPage from "../components/AnimatedPage";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #ff758c, #ff7eb3);
  color: white;
  text-align: center;
`;

const Home = () => {
  return (
    <AnimatedPage>
      <Container>
        <h1>Happy Valentine's Day, Sienna! ❤️</h1>
        <p>You are the love of my life, and I made this just for you.</p>
      </Container>
    </AnimatedPage>
  );
};

export default Home;